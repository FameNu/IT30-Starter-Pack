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
  <div>
    <img
      src="/logo/StarterPack-logo.png"
      alt="StarterPack Logo"
      :class="size"
      class="w-fit h-fit"
      @click="handleClick()"
    />
  </div>
</template>

<style scoped></style>
