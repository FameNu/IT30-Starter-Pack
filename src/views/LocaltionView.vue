<script setup lang="ts">
import LocationCard from '@/components/localtionComponent/LocationCard.vue'
import BackHome from '@/components/actions/BackHome.vue';
import { type LocationsArgs } from '@/models/Locations'

// Path of the image for testing
const GGDriveShowImage: string = import.meta.env.VITE_GD_IMAGE as string
const ImageID: string = '1IdXgY5i5zw96aAyr8z2GjSKbwxaD04tX'
const pathOfImgTest: string = GGDriveShowImage + ImageID
const pathMascot: string = '/mainMascotAction/Mascot-Action-5.png'

// Create a dummy data for testing
const locations: Array<LocationsArgs> = new Array()

// Create a dummy data for testing
for (let i = 0; i < 7; i++) {
  const location: LocationsArgs = {
    pathToImg: pathOfImgTest,
    name: `testing img + ${i}`,
    description: 'this is an description of ' + i,
    link: 'https://maps.app.goo.gl/CuXv2zGn8Vjwyryu6'
  }
  locations.push(location)
}
</script>

<template>
  <BackHome />
  <div class="grid grid-cols-3 grid-rows-1 gap-4">
    <div class="col-span-2">
      <section id="locations-table" class="grid grid-cols-2 max-w-[60vw]">
        <div v-for="location in locations">
          <LocationCard
            :location="location"
          />
        </div>
      </section>
    </div>
    <div class="col-start-3">
      <div class="w-full h-full">
        <img :src="pathMascot" alt="CAPYBARA" class="h-1/3 fixed top-1/4" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
