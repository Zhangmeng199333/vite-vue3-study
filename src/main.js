import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import installElementPlus from './plugin/index'

import './assets/main.css'

const app = createApp(App)

installElementPlus(app)
app.use(createPinia())
app.use(router)

app.mount('#app')
