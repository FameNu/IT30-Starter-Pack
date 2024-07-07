<script setup lang="ts">
const emit = defineEmits(['close-modal'])
</script>

<template>
  <slot>
    <div class="modal">
      <span class="close" @click="emit('close-modal')">&times;</span>
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
  </slot>
</template>

<style scoped></style>
