import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import MemosView from "../views/MemosView.vue"
import ArchivesView from "../views/ArchivesView.vue"
import TrashesView from "../views/TrashesView.vue"
import store from "@/store"

Vue.use(VueRouter)

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter(to, from, next) {
      if (store.state.loginUser) {
        next("memos")
      } else {
        next()
      }
    }
  },
  {
    path: "/memos",
    name: "memos",
    component: MemosView,
    beforeEnter(to, from, next) {
      if (store.state.loginUser) {
        next()
      } else {
        next("home")
      }
    }
  },
  {
    path: "/archives",
    name: "archives",
    component: ArchivesView
  },
  {
    path: "/trashes",
    name: "trashes",
    component: TrashesView
  },
  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
