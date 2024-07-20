<script setup lang="ts">
import { type LocationsParentAttributes } from '@/models/Locations'

defineProps<{
  location: LocationsParentAttributes
}>()
</script>

<template>
  <a :href="location.attributes.linkMap" target="_blank">
    <div
      class="flex-col p-4 mx-3 my-2 justify-center bg-primary rounded-md shadow-gray-400 shadow-md hover:z-10 transform hover:scale-105 transition duration-300 hover:bg-orange-300"
    >
      <!-- I gotchu -->
      <img :src="location.attributes.image" :alt="location.attributes.name" />
      <section class="flex-col pl-3">
        <div class="font-bold mt-4">
          {{ location.attributes.name }}
        </div>
        <div class="font-light text-clip">
          {{ location.attributes.desc }}
        </div>
      </section>
    </div>
  </a>
</template>
