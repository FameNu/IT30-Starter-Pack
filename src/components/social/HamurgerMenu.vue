<script setup lang="ts">
import IgIcon from '@/components/icons/IgIcon.vue'
import MapIcon from '@/components/icons/MapIcon.vue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <MapIcon @click="$router.push('locations')" />
    <a href="https://www.instagram.com/sit.it.starterpack/" target="_blank"><IgIcon /></a>
  </div>
</template>
