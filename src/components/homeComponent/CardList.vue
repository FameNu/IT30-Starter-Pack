<script setup lang="ts">
import { ref } from 'vue';
import { type CardArgs } from '@/models/Card';
import Card from '@/components/homeComponent/Card.vue';

defineProps<{
  cardData: CardArgs[];
}>();

const hoverCardIndex = ref<number | null>(null);

const handleMouseEnter = (index: number) => {
  hoverCardIndex.value = index;
};

const handleMouseLeave = () => {
  hoverCardIndex.value = null;
};
</script>

<template>
  <div class="card-list w-full flex flex-wrap justify-evenly gap-8">
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
    />
  </div>
</template>

<style scoped></style>
