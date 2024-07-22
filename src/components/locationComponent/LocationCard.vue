<script setup lang="ts">
import { type LocationsParentAttributes } from '@/models/Locations'
import LocationDot from '@/components/icons/LocationDot.vue'
import { getImageUrlFromServer } from '@/utils/imageUtil'

defineProps<{
  location: LocationsParentAttributes
}>()

const classOfCategoryMapper = new Map([
  ['ของหวาน', 'dessert'],
  ['เครื่องดื่ม', 'drinks'],
  ['อาหารจานเดียว', 'cuisine'],
  ['บุฟเฟ่ต์', 'buffet'],
  ['อาหารตามสั่ง', 'cooked-to-order'],
  ['ปิ้งย่าง', 'yakiniku'],
  ['ชาบู', 'shabu']
])

const DEV_MODE = import.meta.env.VITE_DEV_MODE === 'true'
</script>

<template>
  <div
    class="mx-3 my-2 bg-white bg-opacity-35 max-w-sm rounded-lg overflow-hidden shadow-lg hover:z-10"
  >
    <div class="p-4 relative overflow-hidden">
      <div
        class="overflow-hidden rounded-md w-full max-h-64 h-64 flex justify-center items-center relative group"
      >
        <a :href="location.attributes.linkMap" target="_blank">
          <img
            class="w-full rounded-md transform transition-transform duration-300 group-hover:scale-110 object-cover"
            :src="
              DEV_MODE
                ? location.attributes.image.data.attributes.url
                : getImageUrlFromServer(location.attributes.image)
            "
            :alt="location.attributes.name"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span class="text-white text-lg font-bold">View in map</span>
          </div>
        </a>
      </div>
    </div>
    <div class="px-6 pb-4">
      <h2 class="text-2xl font-bold mb-2">{{ location.attributes.name }}</h2>
      <p class="mb-4">{{ location.attributes.description }}</p>
      <div class="flex flex-wrap mb-4">
        <span
          v-for="category in location.attributes.categories.data"
          :class="`${classOfCategoryMapper.get(category.attributes.name)}`"
          class="text-black inline-block rounded-md shadow-md px-3 py-1 text-sm mr-2 mb-2"
          >{{ category.attributes.name }}</span
        >
      </div>
      <div v-if="location.attributes.locationDescription" class="flex gap-2">
        <LocationDot />
        <p class="mb-4 font-semibold">{{ location.attributes.locationDescription }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dessert {
  background-color: #fabcff;
}
.drinks {
  background-color: #b4ffe9;
}
.cuisine {
  background-color: #b2e8ff;
}
.buffet {
  background-color: #edceff;
}
.cooked-to-order {
  background-color: #ffcece;
}
.yakiniku {
  background-color: #ffa1a1;
}
.shabu {
  background-color: #ffceef;
}
</style>