<script setup lang="ts">
import LocationCard from '@/components/localtionComponent/LocationCard.vue'
import { type LocationsParentAttributes } from '@/models/Locations'
import type { ResponseObject } from '@/models/ResponseObject'
import { onBeforeMount, ref } from 'vue'
import { fetchData } from '@/utils/fetchData'

const locations = ref<LocationsParentAttributes[]>([])
onBeforeMount(async () => {
  console.log('Before Mount')
  const response: ResponseObject = await fetchData('/locations?populate=image')
  Object.assign(locations.value, response.data as LocationsParentAttributes[])
})

// // Path of the image for testing
// const pathOfImgTest: string = '/public/bg/bg7.png'

// // Create a dummy data for testing
// const locations: Array<LocationsArgs> = new Array()

// // Create a dummy data for testing
// for (let i = 0; i < 7; i++) {
//   const location: LocationsArgs = {
//     pathToImg: pathOfImgTest,
//     name: `testing img + ${i}`,
//     description: 'this is an description of ' + i,
//     link: 'https://www.google.com?=location' + i
//   }
//   locations.push(location)
// }
</script>

<template>
  <div class="w-auto h-auto flex">
    <section id="locations-table" class="grid grid-cols-2 max-w-[60vw]">
      <div v-for="location in locations">
        <LocationCard :nameOfImage="location.attributes.name" pathOfImg="/public/bg/bg7.png">
          <template #name>{{ location.attributes.name }}</template>
          <template #description>{{ location.attributes.desc }}</template>
        </LocationCard>
      </div>
    </section>
    <section class="w-full h-screen flex">
      <!-- Image base on thier hover -->
      <div class="relative flex flex-col justify-center align-middle">
        <img :src="'/public/bg/bg7.png'" alt="CAPYBARA" class="size-[200px] fixed" />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
