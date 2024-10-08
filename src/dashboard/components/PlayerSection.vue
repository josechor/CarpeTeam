<script lang="ts" setup>
import { Players } from '@/shared/constants/Players';
import PlayerCard from './PlayerCard.vue'
</script>
<template>
  <section
    class="player-section grid grid-cols-3 w-full bg-background-200 justify-items-center p-12 pt-80"
  >
    <PlayerCard v-for="player in Players" :key="player.id" :player="player" />
  </section>
</template>

<style scoped></style>
