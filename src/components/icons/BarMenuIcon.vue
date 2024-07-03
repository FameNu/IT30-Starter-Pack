<script setup lang="ts">
import MenuIcon from '@/components/icons/MenuIcon.vue'
import barSVG from '@/assets/svg/barSVG.vue'
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
      <barSVG :color="color" />
    </template>
  </MenuIcon>
</template>
