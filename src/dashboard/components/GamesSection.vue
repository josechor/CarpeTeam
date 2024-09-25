<script lang="ts" setup>
import { GamesGeneralInfo } from '../constants/Games'
import GameCard from './GameCard.vue'
</script>
<template>
  <section
    class="games grid grid-cols-3 justify-items-center games-section background-gradient py-24 pb-0 z-10"
  >
    <GameCard
      v-for="game in GamesGeneralInfo"
      :name="game.name"
      :description="game.description"
      :image="game.image"
    />
  </section>
</template>

<style scoped>
.background-gradient {
  background: linear-gradient(
    to top,
    #1e1e1e 20%,
    #1e1e1e 60%,
    #1e1e1e80 70%,
    #1e1e1e50 80%,
    #1e1e1e30 90%,
    transparent 100%
  );
}
</style>
