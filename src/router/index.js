import Vue from 'vue'
import VueRouter from 'vue-router'


import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
// import adminRouter from './admin'

Vue.use(VueRouter)




const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

  movieRouter,
  cinemaRouter,
  mineRouter,
 /* 什么路由下显示什么组件  ，如/movie显示movieRouter*/
  {
    path : '/*',
    redirect : '/movie'            //默认路由，重定向
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
