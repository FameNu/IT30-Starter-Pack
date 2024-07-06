<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink :to="{name: 'home'}">
    <button
      class="bg-primary text-white p-2 rounded-md shadow-gray-400 shadow-md hover:z-10 hover:bg-orange-400"
    >
      <span class="text-lg">Back to Home</span>
    </button>
  </RouterLink>
</template>
