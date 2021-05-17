import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router';
import Home from '@/views/Home.vue'; 

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "首页",
      access: [] // 未来用于权限过滤
    },
    children:[
       
    ]
  },
  {
    path: '/css',
    name: 'Css',
    component: () => import('@/views/Css/css.vue') 
  },
  {
    path: '/html',
    name: 'Html',
    component: () => import('@/views/Html/html.vue') // 懒加载组件
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
