<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { type LocationsParentAttributes } from '@/models/Locations'
import type { ResponseObject } from '@/models/ResponseObject'
import { fetchData } from '@/utils/fetchData'

import BackHome from '@/components/actions/BackHome.vue'
import LocationCard from '@/components/locationComponent/LocationCard.vue'

import bistroMetaData from '@/temp/bistro_metadata.json'

const locations = ref<LocationsParentAttributes[]>([])
const pathMascot: string = '/mainMascotAction/Mascot-Action-5.png'

onMounted(async () => {
  if (import.meta.env.VITE_DEV_MODE) {
    Object.assign(locations.value, bistroMetaData as LocationsParentAttributes[])
  } else {
    const response: ResponseObject = await fetchData(import.meta.env.VITE_APP_BASE_URL)
    Object.assign(locations.value, response.data as LocationsParentAttributes[])
  }
})
</script>

<template>
  <div class="-z-[9] inset-0 w-full min-h-screen fixed bg-black bg-opacity-15"></div>
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
        <LocationCard
          v-for="(location, index) in locations"
          :key="location.id"
          :location="location"
        />
      </section>
    </div>
    <div class="hidden md:block col-span-1 md:col-start-3">
      <div class="w-full h-full">
        <img :src="pathMascot" alt="CAPYBARA" class="h-1/3 fixed top-1/4" />
      </div>
    </div>
  </div>
</template>
