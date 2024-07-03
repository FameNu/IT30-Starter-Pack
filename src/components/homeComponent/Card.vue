<script setup lang="ts">
import { type Item } from '@/models/Card'
import getBgClass from '@/utils/className';
defineProps({
  name: String,
  image: String,
  isHovered: Boolean,
  hovering: Boolean
})

defineEmits(["onHover", "onLeave", "cardClick"]);
</script>

<template>
  <div
    class="w-fit mx-auto flex flex-col items-center justify-center card-container"
    @mouseenter="$emit('onHover')"
    @mouseleave="$emit('onLeave')"
    @click="$emit('cardClick')"
    @touchstart="$emit('onHover')"
    @touchend="$emit('onLeave')"
    :class="[{ 'shrink-size-img': !isHovered, 'card-hovering': isHovered && hovering }]"
  >
    <div class="h-fit w-fit rounded-b-full card-image-container">
      <img
        :class="['mascot h-48', { 'mascot-bounce': isHovered && hovering }]"
        :src="image"
        :alt="name"
      />
    </div>
    <div class="w-fit card-name text-header-desktop py-3 px-6 rounded-xl" :class="getBgClass(name)">
      {{ name }}
    </div>
  </div>
</template>

<style scoped></style>
