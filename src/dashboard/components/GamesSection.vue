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
    #000000 20%,
    rgba(0, 0, 0) 60%,
    rgba(0, 0, 0, 05) 70%,
    rgba(0, 0, 0.7) 80%,
    rgba(0, 0, 0, 20%) 90%,
    rgba(0, 0, 0, 0)
  );
}
</style>
