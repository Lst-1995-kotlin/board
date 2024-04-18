import { createRouter, createWebHashHistory } from 'vue-router'
import list from"@/views/list.vue"
import write from "@/views/write.vue"
import view from "@/views/view.vue"
import modify from "@/views/modify.vue"
import join from "@/views/join.vue"
import login from "@/views/login.vue"

const routes = [
  {
    path: "/",
    component: list
  },
  {
    path: "/write",
    component: write
  },
  {
    path: "/view/:id",
    component: view
  },
  {
    path: "/modify/:id",
    component: modify
  },
  {
    path: "/join",
    component: join
  },
  {
    path: "/login",
    component: login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
