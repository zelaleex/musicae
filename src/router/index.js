import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Artist from '../pages/Artist.vue'
import Festival from '../pages/Festival.vue'
import Program from '../pages/Program.vue'
import Gallery from '../pages/Gallery.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/artist', name: 'Artist', component: Artist },
  { path: '/festival', name: 'Festival', component: Festival },
  { path: '/program', name: 'Program', component: Program },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
