<script setup lang="ts">
import { type LocationsParentAttributes } from '@/models/Locations'

const emit = defineEmits(['openModal'])

defineProps<{
  location: LocationsParentAttributes
}>()
</script>

<template>
  <div @click="emit('openModal')" class="cursor-pointer">
    <div
      class="flex-col p-4 mx-3 my-2 justify-center bg-primary rounded-md shadow-gray-400 shadow-md hover:z-10 hover:bg-orange-400"
    >
      <!-- I need to zoom a bit when user hover, but I can't -->
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
  </div>
</template>
