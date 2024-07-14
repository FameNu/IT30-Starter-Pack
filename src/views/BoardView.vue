<script setup lang="ts">
import Form from "@/components/boardComponent/Form.vue";
import CardMessage from "@/components/boardComponent/CardMessage.vue";
import { fetchData } from "@/utils/fetchData";
import { type Land } from "@/models/Lands";
import { type MessageObj } from "@/models/Message";
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { io } from 'socket.io-client';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL
const socket = io(BASE_URL);

const messages = ref<MessageObj[]>([]);
const isModalOpen = ref(false);
const lands = ref<Land[]>([])

const dataLoaded = ref(false);

const router = useRouter()

const mapLandData = (data: any[]): Land[] => {
  return data.map(item => ({
    id: item.id,
    name: item.attributes.landName
  }));
};

const mapMessages = (data: any[]): MessageObj[] => {
  return data.map(item => ({
    id : item.id,
    message: item.attributes.message,
    landName: item.attributes.land.data?.attributes.landName || null,
    comments: item.attributes.comments.data ? item.attributes.comments.data.map((comment: any) => ({
      id: comment.id,
      comment: comment.attributes.comment
    })) : []
  }))
}

const initMessages = async () => {
  try {
    const response = await fetchData('/api/blogs?populate=land,comments');
    if (Array.isArray(response.data)) {
      messages.value = mapMessages(response.data);
    } else {
      console.error('Unexpected response format:', response.data);
      messages.value = [];
    }
  } catch (error) {
    console.error('Error fetching messages:', error);
    messages.value = [];
  }
};

const intiLands = async () => {
  try {
    const response = await fetchData('/api/lands');
    if (Array.isArray(response.data)) {
      lands.value = mapLandData(response.data);
    } else {
      console.error('Unexpected response format:', response.data);
      lands.value = [];
    }
    dataLoaded.value = true;
  } catch (error) {
    console.error('Error fetching lands:', error);
    lands.value = [];
    dataLoaded.value = true;
  }
};



onMounted(() => {  
  socket.on('connect', () => {
    initMessages();   
    intiLands();
  });
});

const addMessage = async (newMessage: {message: string, land : number}) => {
  const newMessageObj = { data: newMessage };
  try {
      const response = await fetch(`${BASE_URL}/api/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessageObj),
      });

      const result = await response.json();
      const landName = lands.value.find(land => land.id === newMessage.land)?.name || null;

      socket.emit('sendMessages', {id:result.data.id, message: result.data.attributes.message, landName: landName, comments: []});
    }catch (error) {
      console.error('Error Add new messages:', error);
    }
};

socket.on('recvMessages', (newMessage) => {
  messages.value.push(newMessage);
});

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleModalSubmit = (message: {message: string, land : number}) => {
  addMessage(message);
  closeModal();
};

const handleCardClick = (boardId: number) => {
  router.push({name: "board-comment", params: { bid: boardId}})
}


</script>

<template>
     <div class="p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="mb-4 col-span-1 lg:col-span-3 flex justify-start">
        <button @click="openModal" class="bg-blue-500 text-white py-2 px-4 rounded">New Topic</button>
      </div>
      <CardMessage 
        v-for="message in messages"
        @click="handleCardClick(message.id)" 
        :key="message.id" 
        :messageObj="message"
        :commentCount="message.comments.length === null ? 0: message.comments.length"
        class="col-span-1"
      />
    </div>
    <Form 
      v-if="dataLoaded && isModalOpen" 
      :show="isModalOpen" 
      :lands="lands" 
      @close="closeModal" 
      @submit="handleModalSubmit" 
    />
  </div>
  </template>

<style scoped></style>
