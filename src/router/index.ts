import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/earlyWarning',
      name: 'earlyWarning',
      component: () => import('../views/EarlyWarningSystemView.vue'),
    },
    {
      path: '/highSchool',
      name: 'highSchool',
      component: () => import('../views/HighSchoolView.vue'),
    },
    {
      path: '/constructionPermit',
      name: 'constructionPermit',
      component: () => import('../views/ConstructionPermitView.vue'),
    },
    {
      path: '/cashTransfer',
      name: 'cashTransfer',
      component: () => import('../views/CashTransferView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 190,
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
