import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterComp from '@/components/RegisterComp.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/shop',
    name: '/shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'SingleProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleProductView.vue'),
    props: true
  },
  {
    path: '/contact',
    name: '/contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/checkout',
    name: '/checkout',
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckoutView.vue')
  },
  {
    path: '/user',
    name: '/user',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
    
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterComp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
