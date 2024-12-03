import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { vuetify } from '@/utils/theme'
import '@/assets/css/main.css'

// create app
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
