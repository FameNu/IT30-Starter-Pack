<script setup lang="ts">
import {type MessageObj } from '@/models/Message';
import CommentIcon from '@/assets/svg/CommentSVG.vue'
import getBgClass from '@/utils/className';
defineProps<{ 
  messageObj: MessageObj
  commentCount : number
}>();
</script>

<template>
  <div :class="getBgClass(messageObj.landName) === ''? 'bg-gray-100':getBgClass(messageObj.landName)" class="text-balance font-bold p-4 rounded shadow break-words">
    <p class="text-gray-700 overflow-hidden overflow-ellipsis">{{ messageObj.message }}</p>
    <div class="flex justify-end items-center">
      <span>{{ commentCount }}</span>
      <CommentIcon/>
    </div>
  </div>
</template>

