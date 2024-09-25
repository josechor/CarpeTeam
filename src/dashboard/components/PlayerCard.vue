<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Player } from '../types/PlayersTypes'

defineProps({
  player: {
    type: Object as PropType<Player>,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col w-[300px] bg-background-50 p-5">
    <header></header>
    <section>
      <img :src="player.image" :alt="player.name" />
      <span>{{ player.name }}</span>
      <span>{{ player.description }}</span>
    </section>
    <footer></footer>
  </div>
</template>
