import { createRouter, createWebHistory } from 'vue-router'
import HomeV from '../pages/Home.vue'
import AboutV from '../pages/About.vue'
import RecipesVue from '../pages/Recipes.vue'
import ContactV from '../pages/Contact.vue'
import LoginV from '../pages/Login.vue'
import SignupV from '../pages/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:HomeV
  },
  {
    path: '/about',
    name: 'About',
    component: AboutV,
  },

  {
    path: '/recipes',
    name: 'Recipes',
    component: RecipesVue,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactV,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginV,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupV,
  },

]
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router

