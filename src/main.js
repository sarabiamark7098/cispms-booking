import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { createPinia } from 'pinia'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import FullCalendar from '@fullcalendar/vue3'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(setupCalendar, {})
app.mount('#app')
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)
app.component('FullCalendar', FullCalendar)
