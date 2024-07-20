<script setup lang="ts">
import IgIcon from '@/components/icons/IgIcon.vue'
import MapIcon from '@/components/icons/MapIcon.vue'
import Comment from '@/components/icons/CommentIcon.vue'
import XMarkIcon from '@/components/icons/XMarkIcon.vue'
import BarMenuIcon from '@/components/icons/BarMenuIcon.vue'

import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const closeMenu = ref(true)

const swapOpenClose = () => {
  closeMenu.value = !closeMenu.value
}
</script>

<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input v-model="closeMenu" type="checkbox" />

    <!-- hamburger icon -->
    <BarMenuIcon class="swap-on" />

    <!-- close icon -->
    <XMarkIcon class="swap-off" />

    <div class="-z-30">
      <RouterLink
        to="/boards"
        @click="swapOpenClose"
        :class="[
          'absolute transform transition-all duration-300 rounded-full',
          !closeMenu ? '-translate-y-60 opacity-100' : 'translate-y-0 opacity-0'
        ]"
      >
        <Comment />
      </RouterLink>
      <RouterLink
        to="/locations"
        @click="swapOpenClose"
        :class="[
          'absolute transform transition-all duration-300 rounded-full',
          !closeMenu ? '-translate-y-40 opacity-100' : 'translate-y-0 opacity-0'
        ]"
      >
        <MapIcon />
      </RouterLink>
      <a
        href="https://www.instagram.com/sit.it.starterpack/"
        target="_blank"
        @click="swapOpenClose"
        :class="[
          'absolute transform transition-all duration-300 rounded-full',
          !closeMenu ? '-translate-y-20 opacity-100' : 'translate-y-0 opacity-0'
        ]"
      >
        <IgIcon />
      </a>
    </div>
  </label>
</template>
