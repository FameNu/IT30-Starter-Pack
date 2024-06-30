<script setup>
import StudyTable from "@/components/seasonComponent/BlockTime.vue";
import Bomb from "/mascot/Mascot-Action-4.png";
</script>

<template>
  <div class="flex justify-center text-3xl font-bold">CozyBara</div>
  <div class="md:flex justify-center sm:grid">
    <div class="flex justify-center">
      <img :src="Bomb" alt="bomb" class="w-64 h-64" />
    </div>
    <div>
      <StudyTable class="pt-5 px-4 p-6 rounded-xl" />
    </div>
  </div>
</template>

<style scoped></style>
