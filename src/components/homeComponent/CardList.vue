<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router';
import { type Item } from '@/models/Card'
import { useCapybaraStore } from '@/store/global'
import Card from '@/components/homeComponent/Card.vue'

// defineProps<{
//   // cardData: CardArgs[]
//   cardData: Item[]
// }>()

const kuy = defineProps<{
  cardData: Item[]
}>()
console.log(kuy.cardData);


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
      :name="card.attributes.landName"
      :image="`/mascot/${card.attributes.landName.toLowerCase()}.png`"
      :isHovered="hoverCardIndex === index || hoverCardIndex === null"
      :hovering="hovering"
      @onHover="handleMouseEnter(index)"
      @onLeave="handleMouseLeave"
      @cardClick="handleCardClick(card.attributes.landName)"
    />
  </div>
</template>

<style scoped></style>
