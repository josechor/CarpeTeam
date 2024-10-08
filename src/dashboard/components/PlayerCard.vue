<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Player } from '../types/PlayersTypes'
import router from '@/router';

defineProps({
  player: {
    type: Object as PropType<Player>,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col w-[300px] bg-background-100 p-5 rounded-2xl cursor-pointer" @click="router.push('/player/' + player.name)">
    <header class="flex flex-row items-center justify-between relative">
      <div class="absolute header-decoration">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png" alt="">
      </div>
    </header>
    <section class="flex flex-col gap-2">
      <div class="relative">
        <img :src="player.image" :alt="player.name" />
        <div class="player-name absolute bottom-0 left-1/2 -translate-x-1/2 py-2 flex justify-center items-center w-full">
          <span class="text-2xl font-medium">{{ player.name }}</span>
        </div>
      </div>
      <span>{{ player.description }}</span>
    </section>
    <footer></footer>
  </div>
</template>

<style scoped>
.header-decoration {
  position: absolute;
  z-index: 40;
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 100%;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }
}
.player-name {
  background: linear-gradient(to top, #000000a4, transparent);
}
</style>
