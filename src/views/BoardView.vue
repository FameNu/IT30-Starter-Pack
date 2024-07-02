<script setup lang="ts">
import { ref } from 'vue';

const messages = ref<string[]>([]);
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
