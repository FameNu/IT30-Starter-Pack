<script setup lang="ts">
import Form from '@/components/boardComponent/Form.vue'
import { ref, onMounted } from 'vue'
import { io } from 'socket.io-client'

const BASE_URL = import.meta.env.VITE_BASE_URL
const socket = io(BASE_URL)

const messages = ref<string[]>([])
const isModalOpen = ref(false)

const initMessages = async () => {
  const response = await fetch(`${BASE_URL}/api/messages`)
  const data = await response.json()
  messages.value = data.data.map(
    (message: { attributes: { message: string } }) => message.attributes.message
  )
}

onMounted(() => {
  socket.on('connect', () => {
    initMessages()
  })
  console.log(import.meta.env.BASE_URL)
})

const addMessage = async (newMessage: string) => {
  const newMessageObj = { data: { message: newMessage } }
  try {
    const response = await fetch(`${BASE_URL}/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMessageObj)
    })

    const result = await response.json()

    socket.emit('sendMessages', result.data.attributes.message)
  } catch (error) {
    console.error('Error Add new messages:', error)
  }
}

socket.on('recvMessages', (newMessage) => {
  messages.value.push(newMessage)
})

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const handleModalSubmit = (message: string) => {
  addMessage(message)
  closeModal()
}
</script>

<template>
  <div class="p-4">
    <div class="mb-4">
      <button @click="openModal" class="bg-blue-500 text-white py-2 px-4 rounded">
        Add Message
      </button>
    </div>
    <div class="space-y-2">
      <div v-for="(message, index) in messages" :key="index" class="bg-gray-100 p-4 rounded shadow">
        {{ message }}
      </div>
    </div>
    <Form :show="isModalOpen" @close="closeModal" @submit="handleModalSubmit" />
  </div>
</template>

<style scoped></style>
