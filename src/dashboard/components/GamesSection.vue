<script lang="ts" setup>
import { GamesGeneralInfo } from '../constants/Games'
import GameCard from './GameCard.vue'
</script>
<template>
  <section class="games grid grid-cols-3 games-section background-gradient py-24 z-10">
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
    #121212 20%,
    #121212 60%,
    #12121280 70%,
    #12121250 80%,
    #12121230 90%,
    transparent 100%
  );
}
</style>
