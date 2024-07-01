<script setup lang="ts">
import MenuIcon from '@/components/icons/MenuIcon.vue'
import MapSVG from '@/assets/svg/mapSVG.vue'
defineProps({
  color: {
    type: String,
    default: 'white'
  }
})
</script>

<template>
  <MenuIcon>
    <template #default>
      <MapSVG :color="color" />
    </template>
  </MenuIcon>
</template>
