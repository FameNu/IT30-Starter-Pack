<script setup lang="ts">
const props = defineProps({
  pathOfImg: String,
  nameOfImage: {
    type: String,
    default: 'รูปภาพ',
  },
});
</script>

<template>
  <div class="flex-col p-4 mx-3 my-2 justify-center w-1/3">
    <img :src="props.pathOfImg" :alt="nameOfImage"/>
    <section class="flex-col pl-3">
      <div class="font-bold mt-4">
        <slot name="name">Name of location</slot>
      </div>
      <div class="font-light text-clip">
        <slot name="description">Description of location</slot>
      </div>
    </section>
  </div>
</template>
