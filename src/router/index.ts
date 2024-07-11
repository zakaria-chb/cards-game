import { useCardsStore } from '@/stores/cardsGame';
import { createRouter, createWebHistory } from 'vue-router'
import MainMenuVue from '../views/MainMenu.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-menu',
      component: MainMenuVue
    },
    {
      path: '/play',
      name: 'card-board',
      component: () => import('../views/CardBoard.vue')
    },
    {
      path: '/:notfound(.*)*',
      name: 'not-found',
      component: () => import('../views/404NotFound.vue')
    },
  ]
})

router.afterEach((to, from, next) => {
  if(to.path === '/'){
    useCardsStore().restartGame()
  }
});

export default router
