import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'页面缓存
import router from './router'
import store from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import axios from 'axios'

createApp(App).use(store).use(router).mount('#app')

// App.config.globalProperties.$axiso = axios
// const app = createApp(App)
// app.use(store)
// app.use(ElementPlus)
// app.use(router)
// app.mount('#app')
