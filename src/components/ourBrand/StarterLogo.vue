<script setup lang="ts">
import router from '@/router'
const handleClick = () => {
  router.push('/')
}

defineProps({
  size: {
    type: String,
    default: 'h-14 md:h-20'
  }
})
</script>

<template>
  <div class="pt-4">
    <img
      src="/logo/StarterPack-logo.png"
      alt="StarterPack Logo"
      :class="size"
      @click="handleClick()"
    />
  </div>
</template>

<style scoped></style>
