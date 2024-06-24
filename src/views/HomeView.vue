<script setup lang="ts">
import CardList from "@/components/homeComponent/CardList.vue";
const cardData = [
  {
    name: "Action-1",
    image: "/mascot/Mascot-Action-1.png",
    island: "/sky-island.png",
  },
  {
    name: "Action-2",
    image: "/mascot/Mascot-Action-2.png",
    island: "/sky-island.png",
  },
  {
    name: "Action-3",
    image: "/mascot/Mascot-Action-3.png",
    island: "/sky-island.png",
  },
  {
    name: "Action-4",
    image: "/mascot/Mascot-Action-4.png",
    island: "/sky-island.png",
    position: "top-3",
  },
  {
    name: "Action-5",
    image: "/mascot/Mascot-Action-5.png",
    island: "/sky-island.png",
    position: "top-3 right-2",
  },
];
</script>

<template>
  <div class="h-full flex flex-col gap-24 items-center">
    <div class="bg-yellow-300 w-fit py-4 px-10 rounded-xl">
      <h1>Welcome to Capy Mellow Land</h1>
      <h2>Where you want to visit?</h2>
    </div>
    <CardList :card-data="cardData" />
  </div>
</template>
