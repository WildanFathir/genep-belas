import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/pages/HomePage.vue'
import AboutPage from '@/views/pages/AboutPage.vue'
import ProductPage from '@/views/pages/ProductPage.vue'
import TestimonialPage from '@/views/pages/TestimonialPage.vue'
import ContactPage from '@/views/pages/ContactPage.vue'

export const mainPage: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductPage,
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    component: TestimonialPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    ...mainPage,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/home',
    },
  ],
})

export default router
