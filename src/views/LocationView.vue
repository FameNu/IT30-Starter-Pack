<script setup lang="ts">
import { onBeforeMount, ref, computed } from 'vue'

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

const GGDriveShowImage: string = import.meta.env.VITE_GD_IMAGE as string
const ImageID: string = '1IdXgY5i5zw96aAyr8z2GjSKbwxaD04tX'
const pathOfImgTest: string = GGDriveShowImage + ImageID
const pathMascot: string = '/mainMascotAction/Mascot-Action-5.png'

for (let i = 0; i < 7; i++) {
  const location: LocationsParentAttributes = {
    attributes: {
      image: pathOfImgTest,
      name: `testing img + ${i}`,
      desc: 'this is a description of ' + i,
      typeOfLocation: 'testing',
      linkMap: 'https://maps.app.goo.gl/CuXv2zGn8Vjwyryu6'
    }
  }
  locations.value.push(location)
}

const isMobile = ref(window.innerWidth <= 768)
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 768
})

const isShaking = ref(false)

const handleClick = () => {
  isShaking.value = true
  setTimeout(() => {
    isShaking.value = false
  }, 500)
}

const layoutClass = computed(() => (isMobile.value ? 'flex flex-col' : 'grid grid-cols-3'))

const locationsTableClass = computed(() =>
  isMobile.value ? 'flex flex-col gap-4' : 'grid grid-cols-2 gap-4'
)
</script>

<template>
  <BackHome />
  <div class="w-full flex justify-center">
    <div :class="[layoutClass, 'w-full max-w-screen-lg gap-4']">
      <div class="col-span-2">
        <section id="locations-table" :class="locationsTableClass">
          <div v-for="location in locations" :key="location.attributes.name">
            <LocationCard :location="location" />
          </div>
        </section>
      </div>
      <div v-if="!isMobile">
        <div
          class="fixed inset-y-0 right-0 flex items-center justify-center xl:mr-[12vw] lg:mr-[20vw] md:mr-[4vw]"
        >
          <div class="w-fit h-fit flex items-center justify-center">
            <img
              :src="pathMascot"
              alt="CAPYBARA"
              class="z-50 animate-floating lg:w-80 md:w-64"
              :class="{ 'animate-shake': isShaking }"
              @click="handleClick"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-floating {
  animation: floating 3s ease-in-out infinite;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(10px);
  }
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}
</style>
