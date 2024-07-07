<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

import { type LocationsParentAttributes } from '@/models/Locations'
import type { ResponseObject } from '@/models/ResponseObject'
import { fetchData } from '@/utils/fetchData'

import BackHome from '@/components/actions/BackHome.vue';
import LocationCard from '@/components/localtionComponent/LocationCard.vue'
import ModalComponent from '@/components/modalComponents/ModalComponent.vue'

const locations = ref<LocationsParentAttributes[]>([])
const isModalOpen = ref(false)
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

const showModal = () => {
  console.log('Show Modal')
  isModalOpen.value = true
  console.log('modal open: ', isModalOpen.value)
}
</script>

<template>
  <BackHome />
  <ModalComponent v-if="isModalOpen" @close-modal="isModalOpen = false">
    <template v-slot:header>
      <h1>Header</h1>
    </template>
    <template v-slot:body>
      <p>Body</p>
    </template>
    <template v-slot:footer>
      <button @click="isModalOpen = false">Close</button>
    </template>
  </ModalComponent>
  <div class="grid grid-cols-3 grid-rows-1 gap-4">
    <div class="col-span-2">
      <section id="locations-table" class="grid grid-cols-2 max-w-[60vw]">
        <div v-for="location in locations">
          <LocationCard :location="location" @open-modal="showModal" />
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