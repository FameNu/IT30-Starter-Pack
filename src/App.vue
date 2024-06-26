<script setup lang="ts">
import SITAndStarter from '@/components/ourBrand/SITAndStarter.vue'
</script>

<template>
  <!-- <div class="bg-main-bg bg-no-repeat bg-bottom bg-cover"> -->
  <div>
    <header class="absolute top-0 w-full">
      <SITAndStarter />
    </header>
    <!-- <div class=" absolute w-full h-full">
      <img src="/bg/Banner-GoogleForm.png" alt="main-bg-image" class="w-full h-full ins">
    </div> -->
    <main class="w-screen h-screen p-10 pt-24">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
