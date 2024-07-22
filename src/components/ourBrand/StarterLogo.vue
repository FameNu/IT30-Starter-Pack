<script setup lang="ts">
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
      class="cursor-pointer"
    />
  </div>
</template>

<style scoped></style>
