import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'

createApp(App).use(store).use(router).mount('#app')

// App.config.globalProperties.$axiso = axios
// const app = createApp(App)
// app.use(store)
// app.use(ElementPlus)
// app.use(router)
// app.mount('#app')
