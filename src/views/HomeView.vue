<script setup lang="ts">
import CardList from '@/components/homeComponent/CardList.vue'
import IgIcon from '@/components/icons/IgIcon.vue'
const cardData = [
  {
    name: 'Sproutbara',
    image: '/mascot/sproutbara.png'
  },
  {
    name: 'Sunnybara',
    image: '/mascot/sunnybara.png'
  },
  {
    name: 'Rainybara',
    image: '/mascot/rainybara.png'
  },
  {
    name: 'Russetbara',
    image: '/mascot/russetbara.png'
  },
  {
    name: 'Cozybara',
    image: '/mascot/cozybara.png'
  }
]
</script>

<template>
  <div class="h-full flex flex-col lg:justify-center items-center gap-16">
    <div
      class="bg-yellow-300 w-fit py-4 px-10 mt-2 mx-auto rounded-xl flex flex-col items-center shadow-xl"
    >
      <h1 class="text-header-desktop">Welcome to Capy Mellow Land</h1>
      <h2 class="text-header-desktop">Where you want to visit?</h2>
    </div>
    <CardList :card-data="cardData" />
  </div>
  <div class="flex absolute bottom-5 right-5">
    <IgIcon @click="$router.push('locations')" color="green" size="h-12" class="mx-3" />
    <IgIcon class="mx-3" />
  </div>
</template>
