<script setup lang="ts">
import LocationCard from '@/components/localtionComponent/LocationCard.vue';
const pathOfImgTest: string = 'public/bg/bg7.png';
</script>

<template>
  <div class="w-screen h-screen flex">
    <section class="w-2/3">
      <LocationCard :pathOfImg="pathOfImgTest" nameOfImage="รูปไรวะเนี่ย" />
      <LocationCard :pathOfImg="pathOfImgTest" nameOfImage="รูปไรวะเนี่ย" />
    </section>
    <section class="w-1/3">
      <!-- Image base on thier hover -->
       <div>Testing image</div>
      <img src="" alt="" srcset="" />
    </section>
  </div>
</template>

<style scoped></style>
