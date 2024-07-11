<script setup lang="ts">
import Form from "@/components/boardComponent/Form.vue";
import CardMessage from "@/components/boardComponent/CardMessage.vue";
import { fetchData } from "@/utils/fetchData";
import { type Land } from "@/models/Lands";
import { type MessageObj } from "@/models/Message";
import { ref, onMounted } from 'vue';
import { io } from 'socket.io-client';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL
const socket = io(BASE_URL);

const messages = ref<MessageObj[]>([]);
const isModalOpen = ref(false);
const lands = ref<Land[]>([])

const dataLoaded = ref(false);

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
    landName: item.attributes.land.data?.attributes.landName || null
  }))
}

const initMessages = async () => {
    const response = await fetchData('/api/blogs?populate=land');
    messages.value = mapMessages(response.data)   
} 

const intiLands = async ()=> {
    const response = await fetchData('/api/lands');
    lands.value = mapLandData(response.data);
    dataLoaded.value = true;
    console.log(lands.value);
    
}


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

      socket.emit('sendMessages', {id:result.data.id, message: result.data.attributes.message, landName: landName});
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
</script>

<template>
     <div class="p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="mb-4 col-span-1 lg:col-span-3 flex justify-start">
        <button @click="openModal" class="bg-blue-500 text-white py-2 px-4 rounded">Add Message</button>
      </div>
      <CardMessage 
        v-for="message in messages" 
        :key="message.id" 
        :messageObj="message"
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
