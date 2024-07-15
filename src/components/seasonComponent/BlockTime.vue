<script setup lang="ts">
import leftArrow from "../icons/leftArrow.vue";
import axios from "axios";

const paint = defineProps({
  color: {
    type: String,
    default: '',
    require: true
  }
})

const checkinBGColor = (houseName: string, sec=false) => {
  if (sec) {
    switch (houseName) {
      case 'sproutbara':
        return 'bg-sproutbara-sec'
      case 'sunnybara':
        return 'bg-sunnybara-sec'
      case 'rainybara':
        return 'bg-rainybara-sec'
      case 'russetbara':
        return 'bg-russetbara-sec'
      case 'cozybara':
        return 'bg-cozybara-sec'
      default:
        return ''
    }
  } else {
    switch (houseName) {
      case 'sproutbara':
        return 'bg-sproutbara'
      case 'sunnybara':
        return 'bg-sunnybara'
      case 'rainybara':
        return 'bg-rainybara'
      case 'russetbara':
        return 'bg-russetbara'
      case 'cozybara':
        return 'bg-cozybara'
      default:
        return ''
    }
  }
}

</script>

<template>
  <div :class="checkinBGColor(color, true)">
    <div class="flex justify-between px-20">
      <leftArrow/>
      <h1 class="text-xl font-bold">24 JUNE 2024</h1>
      <leftArrow class="rotate-180" />
    </div>
    <div class="pt-5">
      <div class="pl-3 font-bold">9.30 - 12.30</div>
      <div class="bg-white flex pr-40 p-2 px-3 rounded-xl">
        <div :class="`bg-${color} rounded-xl p-8`"></div>
        <div class="font-bold pl-3">
          <h1 class="text-xl">IT Fundamental</h1>
          <h3 class="text-lg">Class 1</h3>
        </div>
      </div>
    </div>
    <div class="pt-5">
      <div class="pl-3 font-bold">14.00 - 17.00</div>
      <div class="bg-white flex pr-40 p-2 px-3 rounded-xl">
        <div :class="`bg-${color} rounded-xl p-8`"></div>
        <div class="font-bold pl-3">
          <h1 class="text-xl">Computational</h1>
          <h3 class="text-lg">Class 1</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
