import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: localStorage.token != undefined ? Home : Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
});

export default router;
