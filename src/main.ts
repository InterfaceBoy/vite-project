import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 全局组件注册
import "@/components";


createApp(App).use(ElementPlus,router,store).mount('#app')
