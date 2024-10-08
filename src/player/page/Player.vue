<script lang="ts" setup>
import router from '@/router';
import { ref } from 'vue';

const playerId= ref(router.currentRoute.value.params.id)

</script>
<template>
  <div>Aqui va la pagina de {{  playerId }}</div>
</template>
