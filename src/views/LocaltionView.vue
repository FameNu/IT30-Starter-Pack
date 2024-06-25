<script setup lang="ts">
import LocationCard from '@/components/localtionComponent/LocationCard.vue';
const pathOfImgTest: string = "public/bg/bg7.png"
</script>

<template>
  <div class="w-full h-full flex flex-wrap">
    <LocationCard :pathOfImg="pathOfImgTest" nameOfImage="รูปไรวะเนี่ย"/>
    <LocationCard :pathOfImg="pathOfImgTest" nameOfImage="รูปไรวะเนี่ย"/>
  </div>
</template>

<style scoped></style>
