<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import HomeIcon from '@/components/icons/HomeIcon.vue'

const isMobile = ref(window.innerWidth <= 768)
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 768
})
</script>

<template>
  <div v-if="isMobile">
    <RouterLink :to="{ name: 'home' }">
      <button class="flex gap-2 bg-white bg-opacity-35 px-4 py-2 rounded-md shadow-md">
        <HomeIcon />
        <!-- <RouterLink :to="{ name: 'home' }">
    <button
      class="bg-primary text-white p-2 rounded-md shadow-gray-400 shadow-md hover:z-10 hover:bg-orange-400"
    > -->
        <span class="text-lg">Back To Home</span>
      </button>
    </RouterLink>
  </div>
</template>
