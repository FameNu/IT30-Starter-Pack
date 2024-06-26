<script setup lang="ts">
import SITAndStarter from '@/components/ourBrand/SITAndStarter.vue'
</script>

<template>
  <div>
    <div class="-z-10 absolute w-full h-full">
      <img src="/bg/bg6.png" alt="main-bg-image" class="w-full fixed -bottom-4">
    </div>
    <header class="fixed z-50 top-0 w-full">
      <SITAndStarter />
    </header>
    <main class="w-screen h-screen p-10 pt-24">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
