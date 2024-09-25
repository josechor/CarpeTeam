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
  <div class="flex flex-col w-[300px] bg-background-100 p-5 rounded-2xl">
    <header class="flex flex-row items-center justify-between relative">
      <div class="absolute header-decoration"><div class="pico"></div></div>
      <div>
        {{ player.age }}
      </div>
      <div>
        {{ player.nacionality }}
      </div>
    </header>
    <section>
      <img :src="player.image" :alt="player.name" />
      <span>{{ player.name }}</span>
      <span>{{ player.description }}</span>
    </section>
    <footer></footer>
  </div>
</template>

<style scoped>
.header-decoration {
  position: absolute;
  z-index: 40;
  width: 60px;
  height: 60px;
  background-color: red;
  border-radius: 100%;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
