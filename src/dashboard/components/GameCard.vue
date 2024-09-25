<script lang="ts" setup>
import Image from '@/shared/components/Image.vue'
defineProps({
  name: String,
  description: String,
  image: String
})
</script>
<template>
  <div class="game-card p-4 rounded-lg cursor-pointer transition-all duration-150 relative">
    <div class="z-20 flex flex-col items-center gap-4">
      <Image :name="image" :alt="name" class="w-32 h-32 rounded-full" />
      <h2 class="text-xl font-bold">{{ name }}</h2>
      <p class="text-center">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.game-card:hover {
  background-color: #f9fafb10;
}
</style>
