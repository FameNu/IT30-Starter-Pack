<script setup lang="ts">
import SITAndStarter from '@/components/ourBrand/SITAndStarter.vue'
import HamburgerMenu from '@/components/social/HamburgerMenu.vue';
</script>

<template>
  <header class="fixed z-50 top-0 w-full">
    <SITAndStarter />
  </header>
  <main class="w-screen min-h-screen p-10 pt-24">
    <RouterView />
  </main>
  <div class="-z-10 absolute top-0 w-screen h-screen">
    <img
      src="/bg/bg6.png"
      alt="main-bg"
      class="max-lg:h-screen w-dvw md:w-full fixed lg:-bottom-4 opacity-60"
    />
  </div>
  <footer class="fixed bottom-5 right-5 z-50">
    <HamburgerMenu />
  </footer>
</template>