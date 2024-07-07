<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

import { type LocationsParentAttributes } from '@/models/Locations'
import type { ResponseObject } from '@/models/ResponseObject'
import { fetchData } from '@/utils/fetchData'

import BackHome from '@/components/actions/BackHome.vue'
import LocationCard from '@/components/locationComponent/LocationCard.vue'

const locations = ref<LocationsParentAttributes[]>([])
onBeforeMount(async () => {
  console.log('Before Mount')
  const response: ResponseObject = await fetchData('/locations?populate=image')
  Object.assign(locations.value, response.data as LocationsParentAttributes[])
})

// Path of the image for testing
const GGDriveShowImage: string = import.meta.env.VITE_GD_IMAGE as string
const ImageID: string = '1IdXgY5i5zw96aAyr8z2GjSKbwxaD04tX'
const pathOfImgTest: string = GGDriveShowImage + ImageID
const pathMascot: string = '/mainMascotAction/Mascot-Action-5.png'

// Create a dummy data for testing
for (let i = 0; i < 7; i++) {
  const location: LocationsParentAttributes = {
    attributes: {
      image: pathOfImgTest,
      name: `testing img + ${i}`,
      desc: 'this is an description of ' + i,
      typeOfLocation: 'testing',
      linkMap: 'https://maps.app.goo.gl/CuXv2zGn8Vjwyryu6'
    }
  }
  locations.value.push(location)
}
</script>

<template>
  <div class="hidden md:block mx-3 my-4">
    <BackHome />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="block md:hidden w-full">
      <img :src="pathMascot" alt="CAPYBARA" class="w-full" />
    </div>
    <div class="col-span-1 md:col-span-2">
      <section
        id="locations-table"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 max-w-full md:max-w-[60vw]"
      >
        <LocationCard v-for="location in locations" :location="location" />
      </section>
    </div>
    <div class="hidden md:block col-span-1 md:col-start-3">
      <div class="w-full h-full">
        <img :src="pathMascot" alt="CAPYBARA" class="h-1/3 fixed top-1/4" />
      </div>
    </div>
  </div>
</template>
