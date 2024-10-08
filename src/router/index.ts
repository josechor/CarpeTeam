import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../dashboard/page/Dashboard.vue'
import Counter from '@/counter/page/Counter.vue'
import Smite from '@/smite/page/Smite.vue'
import Minecraft from '@/minecraft/page/Minecraft.vue'
import Player from '@/player/page/Player.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/counter-strike',
      name: 'counter',
      component: Counter
    },
    {
      path: '/smite',
      name: 'smite',
      component: Smite
    },
    {
      path: '/minecraft',
      name: ' minecraft',
      component: Minecraft
    },
    {
      path: '/player/:id',
      name: 'player',
      component: Player
    }
  ]
})

export default router
