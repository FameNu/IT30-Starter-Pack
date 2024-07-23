<script setup lang="ts">
import SitSign from '@/components/ourBrand/SitSign.vue'
import StarterLogo from '@/components/ourBrand/StarterLogo.vue'

import router from '@/router'
const handleClick = () => {
  router.push('/')
}
</script>

<template>
  <header class="mx-10 flex justify-between">
    <SitSign @click="handleClick"/>
    <StarterLogo class="pt-4" @click="handleClick" />
  </header>
</template>
