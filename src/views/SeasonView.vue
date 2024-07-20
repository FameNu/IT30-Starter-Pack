<script setup lang="ts">
import { onMounted } from 'vue'
import StudyTable from '@/components/seasonComponent/BlockTime.vue'
import { useRoute } from 'vue-router'
import { useBackGround } from '@/store/global'
import { useCapybaraStore } from '@/store/global'

const route = useRoute()
const backGround = useBackGround()
const landStore = useCapybaraStore()

const name = (route.params.seasons as String).toLowerCase()
const path = `/mascot/${name}.png`

backGround.setBackGroundName(name)

onMounted(async () => {
  await landStore.loadLands()
  console.log(landStore.classRoomByLandName(name));
  
})
</script>

<template>
  <div class="flex justify-center text-3xl font-bold">{{ name }}</div>
  <div  class="flex justify-center text-3xl font-bold">{{ landStore.classRoomByLandName(name) }}</div>
  <div class="md:flex justify-center sm:grid">
    <div class="flex justify-center">
      <img :src="path" alt="bomb" class="w-64 h-64" />
    </div>
    <div>
      <StudyTable
        :name="name"
        class="pt-5 px-4 p-6 rounded-xl"
      />
    </div>
  </div>
</template>

<style scoped></style>
