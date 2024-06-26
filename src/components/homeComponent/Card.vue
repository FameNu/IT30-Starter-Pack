<script setup lang="ts">
defineProps({
  name: String,
  image: String,
  island: String,
  position: {
    type: String,
    default: ''
  },
  isHovered: Boolean
})

defineEmits(['onHover', 'onLeave'])
</script>

<template>
  <div
    class="w-fit flex flex-col items-center card-container"
    @mouseenter="$emit('onHover')"
    @mouseleave="$emit('onLeave')"
  >
    <div
      :class="[
        'relative h-fit w-fit rounded-b-full card-image-container',
        { 'shrink-size-img': !isHovered }
      ]"
    >
      <img :class="['mascot h-48 absolute top-0', position]" :src="image" :alt="name" />
      <img class="w-52 pt-32" :src="island" :alt="`${name}-${island}`" />
    </div>
    <div class="w-fit select-none card-name">{{ name }}</div>
  </div>
</template>

<style scoped></style>
