<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { io } from 'socket.io-client';

const BASE_URL = import.meta.env.VITE_BASE_URL
const socket = io(BASE_URL);


const messages = ref<string[]>([]);
const newMessage = ref('');

const fetchMessages = async () => {
    const response = await fetch(`${BASE_URL}/api/messages`);
    const data = await response.json();
    messages.value = data.data.map((message: { attributes: { message: string; }; }) => message.attributes.message)
} 

onMounted(() => {
  socket.on('connect', () => {
    console.log('Connected to server:', socket.id);
    fetchMessages();   
  });
  console.log(import.meta.env.BASE_URL)
});

const addMessage = (): void => {
  const newMessage = prompt("Enter your message:");
  if (newMessage) {
    messages.value.push(newMessage);
  }

  
};
</script>

<template>
    <div class="p-4">
      <div class="mb-4">
        <button @click="addMessage" class="bg-blue-500 text-white py-2 px-4 rounded">Add Message</button>
      </div>
      <div class="space-y-2">
        <div v-for="(message, index) in messages" :key="index" class="bg-gray-100 p-4 rounded shadow">
          {{ message }}
        </div>
      </div>
    </div>
  </template>

<style scoped></style>
