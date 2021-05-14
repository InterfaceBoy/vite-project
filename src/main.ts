import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

 

const AppNode = createApp(App);

import "@/components/globalComp"; 
// 全局组件组册
AppNode.component('HelloWorld',)

// 生态引入
AppNode.use(ElementPlus)
AppNode.use(store)
AppNode.use(router)
AppNode.mount('#app')
