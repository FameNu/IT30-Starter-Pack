<script setup lang="ts">
import SITAndStarter from "@/components/ourBrand/SITAndStarter.vue";
</script>

<template>
  <div class="bg-main-bg bg-no-repeat bg-center bg-cover">
    <header class="absolute top-0 w-full">
      <SITAndStarter />
    </header>
    <main class="w-screen h-screen p-10 pt-24">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
