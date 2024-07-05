<script setup lang="ts">
defineProps({
  pathOfImg: String,
  nameOfImage: {
    type: String,
    default: 'รูปภาพ'
  }
})
</script>

<template>
  <div
    class="flex-col p-4 mx-3 my-2 justify-center bg-primary rounded-md shadow-gray-400 shadow-md hover:z-10 hover:bg-orange-400"
  >
    <!-- I need to zoom a bit when user hover, but I can't -->
    <img :src="pathOfImg" :alt="nameOfImage" />
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
