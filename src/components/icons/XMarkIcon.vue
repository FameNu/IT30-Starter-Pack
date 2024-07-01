<script setup lang="ts">
import MenuIcon from '@/components/icons/MenuIcon.vue'
import xMarkSVG from '@/assets/svg/xMarkSVG.vue'
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
      <xMarkSVG :color="color" />
    </template>
  </MenuIcon>
</template>
