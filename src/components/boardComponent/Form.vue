<script setup lang="ts">
import { ref } from 'vue';
import { type Land } from "@/models/Lands";
import LandsOptions from "@/components/boardComponent/LandsOptions.vue";

const props = defineProps<{ 
  show: boolean,
  lands: Land[]
}>();

const emit = defineEmits(['close', 'submit']);

const newMessage = ref('');
const selectedLand = ref()

const closeModal = () => {
  emit('close');
};

const handleSelect = (id : string) => {
  selectedLand.value = id
}

const submitForm = () => {
  if (newMessage.value.trim()) {    
    const landId = selectedLand.value === 7 ? null : selectedLand.value;
    emit('submit', { message: newMessage.value, land: landId });
    newMessage.value = '';
  }
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
      <h2 class="text-xl font-semibold mb-4 text-center">Add New Topic</h2>
      <form @submit.prevent="submitForm">
        <input
          v-model="newMessage"
          type="text"
          placeholder="Enter your message"
          class="border border-gray-300 p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <LandsOptions :lands="props.lands" @select="handleSelect" />
        <div class="flex justify-end mt-4">
          <button @click="closeModal" type="button" class="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Cancel
          </button>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
  
