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
    path: "/leaderboard", 
    name: "Leaderboard", 
    component: () => import("../views/game/Leaderboard.vue")
  },
  { 
    path: "/game/home", 
    name: "Home", 
    component: () => import('../views/game/Home.vue'), 
    meta: { 
      authProtected: true
   }
  }, 
   { 
     path: "/game/shop", 
     name: "Shop", 
     component: () => import("../views/game/Shop.vue"), 
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

router.beforeEach((to, from, next) => {
  if (to.name === 'Log In' && localStorage.getItem('token') != null) next({ name: 'Home' })
  else next()
})

router.beforeEach((to, from, next) => { 
  if (to.meta.authProtected && !localStorage.getItem('token')) next({ name: "Log In "})
  else next()
})

export default router
