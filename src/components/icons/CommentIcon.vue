<script setup lang="ts">
import MenuIcon from '@/components/icons/MenuIcon.vue'
import CommentSVG from '@/assets/svg/ForumSVG.vue'
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
      <CommentSVG :color="color" />
    </template>
  </MenuIcon>
</template>
