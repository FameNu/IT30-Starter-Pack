<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: "h-20",
  },
});
</script>

<template>
  <div class="mt-4">
    <img
      src="/logo/StarterPack-logo.png"
      alt="StarterPack Logo"
      :class="size"
    />
  </div>
</template>

<style scoped></style>
