import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LocationView from '@/views/LocationView.vue'
import SeasonView from '@/views/SeasonView.vue'
import BoardView from '@/views/BoardView.vue'
import CommentView from '@/views/CommentView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
      component: LocationView
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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: HomeView
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
