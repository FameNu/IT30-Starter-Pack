<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router';
import { type CardArgs } from '@/models/Card'
import { useCapybaraStore } from '@/store/global'
import Card from '@/components/homeComponent/Card.vue'

defineProps<{
  // cardData: CardArgs[]
  cardData: {}
}>()

const capybaraStore = useCapybaraStore()
const hoverCardIndex = ref<number | null>(null)
const hovering = ref<boolean>(false)

const handleMouseEnter = (index: number) => {
  hoverCardIndex.value = index
  hovering.value = true
}

const handleMouseLeave = () => {
  hoverCardIndex.value = null
  hovering.value = false
}

const handleCardClick = (name : string) => {
  console.log(name);
  capybaraStore.setCapybaraName(name);
  router.push({ name: 'seasons', params: { seasons: `${name}` } });

};
</script>

<template>
  <div
    class="card-list w-full max-w-[1300px] max-md:list-mobile md:list-medium-screen xl:list-desktop"
  >
    <Card
      v-for="(card, index) in cardData"
      :key="index"
      :image="card.image"
      :name="card.name"
      :isHovered="hoverCardIndex === index || hoverCardIndex === null"
      @onHover="handleMouseEnter(index)"
      @onLeave="handleMouseLeave"
      :hovering="hovering"
      @cardClick="handleCardClick(card.name)"
    />
  </div>
</template>

<style scoped></style>
