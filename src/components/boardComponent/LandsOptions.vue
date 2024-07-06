<script setup lang="ts">
import { ref, watch } from "vue";
import { type Land } from "@/models/Lands";

const props = defineProps<{ 
  lands: Land[]
}>();

const emit = defineEmits(['select']);

const optionLands = ref<Land[]>([{id:7,name:"Capymellow"}].concat(props.lands))

const selectedLandId = ref(optionLands.value[0].id); 

watch(selectedLandId, (newVal) => {  
  emit('select', newVal);
});
</script>

<template>
    <div>
        <select v-model="selectedLandId">
            <option 
            v-for="{id,name} in optionLands"
            :key="id"
            :value="id"
            >
            {{ name }}
            </option>
        </select>
    </div>
</template>
