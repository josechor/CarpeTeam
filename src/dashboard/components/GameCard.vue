<script lang="ts" setup>
defineProps({
  name: String,
  description: String,
  image: String
})
</script>
<template>
  <div class="game-card flex flex-col items-center gap-4 bg-background-400 p-4 rounded-lg">
    <img :src="image" alt="game.name" class="w-32 h-32 rounded-full" />
    <h2 class="text-xl font-bold">{{ name }}</h2>
    <p class="text-center">{{ description }}</p>
  </div>
</template>
