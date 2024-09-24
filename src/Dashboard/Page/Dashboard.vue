<script lang="ts" setup>
import Introduction from '../components/Introduction.vue'
import GamesSection from '../components/GamesSection.vue'
</script>
<template>
  <main class="flex flex-col w-full gap-16 bg-backgrond-500 text-text-primary">
    <Introduction />
    <GamesSection />
  </main>
</template>

<style scoped>
.title {
  text-shadow: 0 0 40px #00000030;
}
</style>
