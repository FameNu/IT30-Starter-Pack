<script setup lang="ts">
import StudyTable from '@/components/seasonComponent/BlockTime.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const name = route.params.seasons.toLowerCase()
const path = `/mascot/${name}.png`
</script>

<template>
  <div
    class="flex justify-center gap-8 flex-col content-center lg:flex-row lg:items-center h-[75vh] md:flex-row md:items-center"
  >
    <div class="flex flex-col items-center text-3xl font-bold">
      {{ name }}
      <span class="min-w-64 max-w-64">
        <img :src="path" alt="bomb" class="w-full h-full" />
      </span>
    </div>
    <div class="md:flex justify-center sm:grid">
      <div>
        <StudyTable class="pt-5 px-4 p-6 rounded-xl" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
