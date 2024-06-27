<script setup lang="ts">
import LocationCard from '@/components/localtionComponent/LocationCard.vue';
import { type LocationsArgs } from '@/models/Locations';
const pathOfImgTest: string = 'public/bg/bg7.png';

const locations: Array<LocationsArgs> = new Array();

for (let i = 0; i < 7; i++) {
  const location: LocationsArgs = {
    pathToImg: pathOfImgTest,
    name: `testing img + ${i}`,
    description: 'this is an description of ' + i,
  };
  locations.push(location);
}
</script>

<template>
  <div class="w-auto h-auto flex">
    <section id="locations-table" class="grid grid-cols-2 max-w-[60vw]">
      <div v-for="location in locations">
        <LocationCard
          :nameOfImage="location.name"
          :pathOfImg="location.pathToImg"
        >
          <template #name>{{ location.name }}</template>
          <template #description>{{ location.description }}</template>
        </LocationCard>
      </div>
    </section>
    <section class="w-full h-screen flex">
      <!-- Image base on thier hover -->
      <div class="relative flex flex-col justify-center align-middle">
        <img :src="pathOfImgTest" alt="CAPYBARA" class="size-[200px] fixed" />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
