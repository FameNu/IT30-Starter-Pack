<script setup lang="ts">
import SITAndStarter from '@/components/ourBrand/SITAndStarter.vue'
import HamburgerMenu from '@/components/social/HamburgerMenu.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const bgPath = ref('')

watch(
  () => route.path,
  (path) => {
    if (path === '/') {
      bgPath.value = '/bg/bg6.png'
    } else {
      bgPath.value = `/bg${String(path).toLowerCase()}.png`
    }
  }, { immediate: true }
)
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
      :src="`${bgPath}`"
      alt="main-bg-image"
      class="max-[1175px]:h-screen w-dvw min-[1175px]:w-full fixed min-[1175px]:-bottom-4 opacity-60"
    />
  </div>
  <footer class="fixed bottom-5 right-5 z-50">
    <HamburgerMenu />
  </footer>
</template>
