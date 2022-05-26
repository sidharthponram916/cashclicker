import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Intro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Home
  },
  { 
    path: '/signup', 
    name: "SignUp", 
    component:() => import("../views/auth/SignUp.vue")
  }, 
  { 
    path: "/login", 
    name: "Log In", 
    component: () => import("../views/auth/LogIn.vue")
  }, 
  { 
    path: "/game/home", 
    name: "Home", 
    component: () => import('../views/game/Home.vue'), 
    meta: { 
      authProtected: true
   }
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
