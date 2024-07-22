<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import axios from 'axios'
import leftArrow from '../icons/leftArrow.vue'
import { type Schedule } from '@/models/Card'
import getBgClass from '@/utils/className'
import Slide from '../icons/Slide.vue'
import StarterLogo from '../ourBrand/StarterLogo.vue'

const props = defineProps({
  name: {
    type: String,
    default: '',
    require: true
  }
})

const bgColor = computed(() => {
  return props.name
})

const schedules = ref([] as Schedule[])
const activityDatePeriod = computed(() =>
  Array.from(new Set(schedules.value.map((schedule) => schedule.attributes.date)))
)

const chosenDate = ref('')
const formattedDate = computed(() =>
  new Date(chosenDate.value)
    .toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    .toUpperCase()
)

const scheduleByChosenDate = computed(() =>
  schedules.value.filter((schedule) => schedule.attributes.date === chosenDate.value)
)

// HH:MM:SS -> HH.MM
const formatTimeSlot = (start: string, end: string) => {
  return `${start.slice(0, 2)}.${start.slice(3, 5)} - ${end.slice(0, 2)}.${end.slice(3, 5)}`
}

const showNextDate = () => {
  const index = activityDatePeriod.value.findIndex((date) => date === chosenDate.value)
  if (index < activityDatePeriod.value.length - 1) {
    chosenDate.value = activityDatePeriod.value[index + 1]
  }
}

const showPreviousDate = () => {
  const index = activityDatePeriod.value.findIndex((date) => date === chosenDate.value)
  if (index > 0) {
    chosenDate.value = activityDatePeriod.value[index - 1]
  }
}

onMounted(async () => {
  const response = await axios.get(
    'http://it30starterpack.sit.kmutt.ac.th:1337/api/schedules?populate=land&pagination[pageSize]=50'
  )
  schedules.value = response.data.data.filter(
    (schedule: Schedule) =>
      schedule.attributes.land.data?.attributes.landName.toLowerCase() === props.name ||
      schedule.attributes.title === 'Open ceremony'
  ) as Schedule[]
  console.log(schedules.value)
  console.log(response.data.data)

  // date is the first priority then startClass
  schedules.value = schedules.value.sort(
    (a, b) =>
      a.attributes.date.localeCompare(b.attributes.date) ||
      a.attributes.startClass.localeCompare(b.attributes.startClass)
  )
  chosenDate.value = activityDatePeriod.value.includes(new Date().toISOString().slice(0, 10))
    ? new Date().toISOString().slice(0, 10)
    : activityDatePeriod.value[0]
})
</script>

<template>
  <div :class="`bg-${bgColor}`">
    <div class="flex justify-between px-20">
      <leftArrow
        :class="{ invisible: activityDatePeriod.findIndex((date) => date === chosenDate) === 0 }"
        @click="showPreviousDate"
      />
      <h1 class="text-xl font-bold">{{ formattedDate }}</h1>
      <leftArrow
        :class="{
          invisible:
            activityDatePeriod.findIndex((date) => date === chosenDate) ===
            activityDatePeriod.length - 1
        }"
        @click="showNextDate"
        class="rotate-180"
      />
    </div>
    <div v-for="_class of scheduleByChosenDate" class="pt-5">
      <div class="pl-3 font-bold">
        {{ formatTimeSlot(_class.attributes.startClass, _class.attributes.endClass) }}
      </div>
      <a
        :href="`${_class.attributes.slideLink}`"
        target="_blank"
        v-if="!_class.attributes.title.includes('Open')"
      >
        <div class="p-2 px-3 bg-white flex rounded-xl">
          <div class="w-16 m-2 p-2 rounded-xl flex justify-center" :class="getBgClass(bgColor, true)">
            <Slide/>
          </div>
          <div class="pl-3 flex items-center">
            <h1 class="font-bold text-xl">{{ _class.attributes.title }}</h1>
          </div>
        </div>
      </a>
      <div class="p-2 px-3 bg-white flex rounded-xl" v-else>
        <div class="m-2 p-2 rounded-xl" :class="getBgClass(bgColor, true)">
          <StarterLogo class="pt-0"/>
        </div>
        <div class="pl-3 flex items-center">
          <h1 class="font-bold text-xl">{{ _class.attributes.title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
