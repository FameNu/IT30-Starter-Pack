<script setup lang="ts">
defineProps({
  name: String,
  image: String,
  island: String,
  position: {
    type: String,
    default: ''
  },
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
  >
    <div
      :class="[
        'relative h-fit w-fit rounded-b-full card-image-container',
        { 'shrink-size-img': !isHovered,
            'card-hovering': isHovered && hovering
         }
      ]"
    >
      <img :class="['mascot h-48 absolute top-0', position, {'mascot-bounce': isHovered && hovering}]" :src="image" :alt="name" />
      <img class="w-52 pt-32" :src="island" :alt="`${name}-${island}`" />
    </div>
    <div 
        class="w-fit select-none card-name py-3 px-6 bg-slate-100 rounded-xl" 
        :class="[{'card-name-hovering': isHovered && hovering}]"
    >{{ name }}</div>
  </div>
</template>

<style scoped></style>
