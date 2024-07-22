<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HomeIcon from '@/components/icons/HomeIcon.vue'
</script>

<template>
  <RouterLink :to="{ name: 'home' }">
    <button class="flex gap-2 bg-white bg-opacity-35 px-4 py-2 rounded-md shadow-md">
      <HomeIcon />
      <!-- <RouterLink :to="{ name: 'home' }">
    <button
      class="bg-primary text-white p-2 rounded-md shadow-gray-400 shadow-md hover:z-10 hover:bg-orange-400"
    > -->
      <span class="text-lg">Back to Home</span>
    </button>
  </RouterLink>
</template>
