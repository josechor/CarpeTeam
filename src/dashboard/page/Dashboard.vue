<script lang="ts" setup>
import Introduction from '../components/Introduction.vue'
import GamesSection from '../components/GamesSection.vue'
import PlayerSection from '../components/PlayerSection.vue'
</script>
<template>
  <main class="flex flex-col w-full bg-background-500 text-text-primary">
    <Introduction class="mb-12" />
    <GamesSection />
    <PlayerSection />
  </main>
</template>

<style scoped>
main {
  background-image: url('/src/shared/images/RaAndCounter.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
.title {
  text-shadow: 0 0 40px #00000030;
}
</style>
