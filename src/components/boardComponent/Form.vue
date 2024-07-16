<script setup lang="ts">
import { ref } from 'vue'
import { io } from 'socket.io-client'

defineProps<{ show: boolean }>()
const emit = defineEmits(['close', 'submit'])

const newMessage = ref('')

const closeModal = () => {
  emit('close')
}

const submitForm = () => {
  if (newMessage.value.trim()) {
    emit('submit', newMessage.value)
    newMessage.value = ''
  }
}
</script>

<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded shadow-lg">
      <h2 class="text-xl mb-4">Add New Message</h2>
      <form @submit.prevent="submitForm">
        <input
          v-model="newMessage"
          type="text"
          placeholder="Enter your message"
          class="border p-2 w-full mb-4"
        />
        <div class="flex justify-end">
          <button
            @click="closeModal"
            type="button"
            class="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
