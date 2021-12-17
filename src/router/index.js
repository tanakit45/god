import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import w1 from '../components/w1.vue'
import multi from '../components/multi.vue'
import loop from '../components/loop.vue'
import showuser from '../components/showuser.vue'
import insertf from '../components/insertf.vue'
import login from '../components/login.vue'
import shop from '../components/shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/w1',
    name: 'w1',
    component: w1
  },{
    path: '/multi',
    name: 'multi',
    component: multi
  },{
    path: '/loop',
    name: 'loop',
    component: loop
  },{
    path: '/showuser',
    name: 'showuser',
    component: showuser
  },{
    path: '/insertf',
    name: 'insertf',
    component: insertf
  },{
    path: '/login',
    name: 'login',
    component: login
  },{
    path: '/shop',
    name: 'shop',
    component: shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
