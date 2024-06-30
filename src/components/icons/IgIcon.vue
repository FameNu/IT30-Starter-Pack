<script setup lang="ts">
import igSVG from '@/assets/svg/igSVG.vue'
import MenuIcon from '@/components/icons/MenuIcon.vue'

const props = defineProps({
  color: {
    type: String,
    default: '#ffffff'
  }
})
</script>

<template>
  <MenuIcon>
    <template #default>
      <igSVG :color="props.color" />
    </template>
  </MenuIcon>
</template>