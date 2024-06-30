<script setup lang="ts">
import { ref } from 'vue'
import { type CardArgs } from '@/models/Card'
import Card from '@/components/homeComponent/Card.vue'

defineProps<{
  cardData: CardArgs[]
}>()

const hoverCardIndex = ref<number | null>(null)

const handleMouseEnter = (index: number) => {
  hoverCardIndex.value = index
}

const handleMouseLeave = () => {
  hoverCardIndex.value = null
}

const handleCardClick = (index: number) => {
  console.log(`Card ${index} is clicked`);
};
</script>

<template>
  <div
    class="card-list w-full max-w-[1300px] min-h-[500px] max-md:list-mobile md:list-medium-screen xl:list-desktop"
  >
    <Card
      v-for="(card, index) in cardData"
      :key="index"
      :image="card.image"
      :name="card.name"
      :island="card.island"
      :position="card.position"
      :isHovered="hoverCardIndex === index || hoverCardIndex === null"
      @onHover="handleMouseEnter(index)"
      @onLeave="handleMouseLeave"
      @cardClick="handleCardClick(index)"
    />
  </div>
</template>

<style scoped></style>
