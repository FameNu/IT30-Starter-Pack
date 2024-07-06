<script setup lang="ts">
import { type LocationsArgs } from '@/models/Locations'

defineProps<{
  location: LocationsArgs
}>()
</script>

<template>
  <a :href="location.link" target="_blank">
    <div
      class="flex-col p-4 mx-3 my-2 justify-center bg-primary rounded-md shadow-gray-400 shadow-md hover:z-10 hover:bg-orange-400"
    >
      <!-- I need to zoom a bit when user hover, but I can't -->
      <img :src="location.pathToImg" :alt="location.name" />
      <section class="flex-col pl-3">
        <div class="font-bold mt-4">
          {{ location.name }}
        </div>
        <div class="font-light text-clip">
          {{ location.description }}
        </div>
      </section>
    </div>
  </a>
</template>
