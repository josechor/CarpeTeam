<script lang="ts" setup>
import router from '@/router'
import Image from '@/shared/components/Image.vue'
import type { PropType } from 'vue'
import type { GameGeneralInfo } from '../types/GamesTypes';
defineProps({
  game: {
    type: Object as PropType<GameGeneralInfo>,
    required: true
  }
})
</script>
<template>
  <div
    class="game-card p-4 rounded-lg cursor-pointer transition-all duration-150 relative w-[400px]"
    @click="router.push('/' + game.page)"
  >
    <div class="z-20 flex flex-col items-center gap-4">
      <Image :name="game.image" :alt="game.name" class="w-32 h-32 rounded-full" />
      <h2 class="text-xl font-bold">{{ game.name }}</h2>
      <p class="text-center">{{ game.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.game-card:hover {
  background-color: #f9fafb10;
}
</style>
