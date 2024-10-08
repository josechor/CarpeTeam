<script lang="ts" setup>
import router from '@/router';
import NavHeader from '../components/NavHeader.vue'
</script>
<template>
  <header class="w-full bg-background-100 flex items-center justify-between py-6 px-6 pr-[8%]">
    <h1 class="text-text-primary font-bold text-4xl cursor-pointer" @click="router.push('/')">CARPETEAM</h1>
    <NavHeader />
  </header>
</template>
