import { createApp } from 'vue'
import App from './App.vue'
import router from '@/plugins/router'
import i18n from '@/plugins/i18n'

import '@/assets/styles/main.css'

createApp(App).use(router).use(i18n).mount('#app')
