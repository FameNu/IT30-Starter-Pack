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
})
</script>

<template>
  <div
    class="flex justify-center gap-8 flex-col content-center lg:flex-row lg:items-center h-[75vh] md:flex-row md:items-center"
  >
    <div class="flex flex-col items-center text-3xl font-bold">
        <div>{{ route.params.seasons }}</div>
        <div>{{ landStore.classRoomByLandName(name) }}</div>
      <span class="min-w-64 max-w-64">
        <img :src="path" alt="bomb" class="w-full h-full" />
      </span>
    </div>
    <div class="md:flex justify-center sm:grid">
      <div>
        <StudyTable :name="name" class="pt-5 px-4 p-6 rounded-xl" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
