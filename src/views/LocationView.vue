<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { type LocationsParentAttributes } from '@/models/Locations'
import { fetchData } from '@/utils/fetchData'

import BackHome from '@/components/actions/BackHome.vue'
import LocationCard from '@/components/locationComponent/LocationCard.vue'

import bistroMetaData from '@/temp/bistro_metadata.json'

const locations = ref<LocationsParentAttributes[]>([])
const pathMascot: string = '/mainMascotAction/Mascot-Action-5.png'

onMounted(async () => {
  if (import.meta.env.VITE_DEV_MODE === 'true') {
    Object.assign(locations.value, bistroMetaData.data)
    console.log('dev mode')
  } else {
    const response = await fetchData(
      `${import.meta.env.VITE_APP_BASE_URL}/api/locations?populate=image%2Ccategories&sort=typeOfLocation%3Adesc`
    )
    Object.assign(locations.value, response.data)
  }
})

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
</script>

<template>
  <div class="-z-[9] inset-0 w-full min-h-screen fixed bg-black bg-opacity-15"></div>
  <div class="hidden md:block mx-3 my-4">
    <BackHome />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- <div class="block md:hidden w-full">
      <img :src="pathMascot" alt="CAPYBARA" class="w-full" />
    </div> -->
    <div class="col-span-1 md:col-span-2">
      <section
        id="locations-table"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 max-w-full md:max-w-[60vw]"
      >
        <LocationCard v-for="location in locations" :key="location.id" :location="location" />
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
