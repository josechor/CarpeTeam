<script lang="ts" setup>
import { Players } from '../constants/Players'
import PlayerCard from './PlayerCard.vue'
</script>
<template>
  <section class="bg-background-100 grid grid-cols-3 w-full justify-items-center pb-12">
    <PlayerCard v-for="player in Players" :key="player.id" :player="player" />
  </section>
</template>
