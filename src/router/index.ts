import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LocaltionView from '@/views/LocaltionView.vue'
import SeasonView from '@/views/SeasonView.vue'
import BoardView from '@/views/BoardView.vue'
import CommentView from '@/views/CommentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/locations',
      name: 'locations',
      component: LocaltionView
    },
    {
      path: '/:seasons',
      name: 'seasons',
      component: SeasonView
    },
    {
      path: '/boards',
      name: 'boards',
      component: BoardView
    },
    {
      path: '/boards/:bid',
      name: 'board-comment',
      component: CommentView
    }
  ]
})

export default router
