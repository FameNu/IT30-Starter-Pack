<script setup lang="ts">
defineProps({
  name: String,
  image: String,
  island: String,
  isHovered: Boolean,
  hovering: Boolean
})

defineEmits(['onHover', 'onLeave'])
</script>

<template>
  <div
    class="w-fit mx-auto flex flex-col items-center justify-center card-container"
    @mouseenter="$emit('onHover')"
    @mouseleave="$emit('onLeave')"
    @touchstart="$emit('onHover')"
    @touchend="$emit('onLeave')"
    :class="[{ 'shrink-size-img': !isHovered, 'card-hovering': isHovered && hovering }]"
  >
    <div
      class="h-fit w-fit rounded-b-full card-image-container"
    >
      <img
        :class="['mascot h-48', { 'mascot-bounce': isHovered && hovering }]"
        :src="image"
        :alt="name"
      />
    </div>
    <div
      class="w-fit select-none card-name py-3 px-6 rounded-xl"
      :class="[`bg-${name?.toLowerCase()}`]"
    >
      {{ name }}
    </div>
  </div>
</template>

<style scoped></style>
