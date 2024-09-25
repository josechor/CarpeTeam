<script setup>
defineProps({
  name: String
})
</script>
<template>
  <img :src="`/src/shared/images/${name}`" alt="game.name" />
</template>
