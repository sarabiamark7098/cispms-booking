import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import CharterView from '@/views/CharterView.vue'
import ProfileClientsView from '@/views/ProfileClientsView.vue'
import RequestOTP from '@/components/RequestOTP.vue'
import RequestAssistance from '@/components/RequestAssistance.vue'
import ScheduleAssistance from '@/components/ScheduleClient.vue'
import RecordClientInfo from '@/components/RecordClientInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesView,
    },
    {
      path: '/charter',
      name: 'Charter',
      component: CharterView,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileClientsView,
    },
    {
      path: '/request',
      name: 'Request',
      component: ProfileClientsView,
      children: [
        {
          path: 'assistance',
          component: RequestAssistance,
        },
        {
          path: 'schedule',
          component: ScheduleAssistance,
        },
        {
          path: 'client',
          component: RecordClientInfo,
        },
        {
          path: 'upload',
          component: RequestOTP,
        },
      ],
    },
  ],
})

export default router
