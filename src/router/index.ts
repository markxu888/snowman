// import { Vue } from 'vue-class-component'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "",
  //   redirect: "/blackboard"
  // },
  {
    path: "/blackboard",
    component: () => import('@/views/blackboard/Blackboard.vue')
  },
  {
    path: "/snowman",
    component: () => import('@/views/snowman/Fight.vue')
  },
  {
    path: "/profile",
    component: () => import('@/views/profile/Profile.vue')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
