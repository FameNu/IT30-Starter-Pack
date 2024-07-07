<script setup lang="ts">
import { type LocationsParentAttributes } from '@/models/Locations'

defineProps<{
  location: LocationsParentAttributes
}>()
</script>

<template>
  <div
    class="mx-3 my-2 bg-primary max-w-sm rounded-lg overflow-hidden shadow-lg hover:z-10 hover:bg-orange-400"
  >
    <div class="p-4 relative overflow-hidden">
      <div class="overflow-hidden rounded-md">
        <img
          class="w-full transform transition-transform duration-300 hover:scale-110"
          :src="location.attributes.image"
          :alt="location.attributes.name"
        />
      </div>
    </div>
    <div class="px-6 pb-4">
      <div class="font-bold text-xl mb-2">{{ location.attributes.name }}</div>
      <p class="text-gray-700 text-base text-clip">
        {{ location.attributes.desc }}
      </p>
    </div>
  </div>
</template>
