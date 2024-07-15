<script setup lang="ts">
import CardList from '@/components/homeComponent/CardList.vue'
import axios from 'axios'
import { type Item } from '@/models/Card'
import { ref } from 'vue'

const dataArray = ref<Item[]>([])

const setDataArray = async () => {
  const response = await axios.get('http://it30starterpack.sit.kmutt.ac.th:1337/api/lands')
  const items: Item[] = response.data.data
  dataArray.value = items
  console.log(dataArray.value[0].attributes.landName)
}

setDataArray()

// const data = async () => {
//   const response = await axios.get('http://it30starterpack.sit.kmutt.ac.th:1337/api/lands')
//   const items: Item[] = response.data.data
//   return items
// }

// dataArray.value = await data()
// const duse = dataArray.value
// console.log(duse[0]);

// export type Item ={
//   id: number,
//   attributes: {
//     landName: string,
//     createAt: string,
//     updateAt: string,
//     publishedAt: string,
//   }
// }

const cardData: Item[] = [
  {
    id: 1,
    attributes: {
      landName: 'Sproutbara',
      createAt: '2021-09-01T00:00:00.000Z',
      updateAt: '2021-09-01T00:00:00.000Z',
      publishedAt: '2021-09-01T00:00:00.000Z'
    }
  },
  {
    id: 2,
    attributes: {
      landName: 'Sunnybara',
      createAt: '2021-09-01T00:00:00.000Z',
      updateAt: '2021-09-01T00:00:00.000Z',
      publishedAt: '2021-09-01T00:00:00.000Z'
    }
  },
  {
    id: 3,
    attributes: {
      landName: 'Rainybara',
      createAt: '2021-09-01T00:00:00.000Z',
      updateAt: '2021-09-01T00:00:00.000Z',
      publishedAt: '2021-09-01T00:00:00.000Z'
    }
  },
  {
    id: 4,
    attributes: {
      landName: 'Russetbara',
      createAt: '2021-09-01T00:00:00.000Z',
      updateAt: '2021-09-01T00:00:00.000Z',
      publishedAt: '2021-09-01T00:00:00.000Z'
    }
  },
  {
    id: 5,
    attributes: {
      landName: 'Cozybara',
      createAt: '2021-09-01T00:00:00.000Z',
      updateAt: '2021-09-01T00:00:00.000Z',
      publishedAt: '2021-09-01T00:00:00.000Z'
    }
  }
]
</script>

<template>
  <div class="h-full flex flex-col lg:justify-center items-center">
    <div
      class="bg-primary w-fit py-4 px-6 mt-2 mx-auto rounded-xl flex flex-col items-center shadow-xl"
    >
      <h1 class="text-header-desktop">Welcome to Capy Mellow Land</h1>
      <h2 class="text-header-desktop">Where you want to visit?</h2>
    </div>
    <!-- <CardList :cardData="dataArray" /> -->
    <CardList :cardData="cardData" class="pt-8"/>
  </div>
</template>
