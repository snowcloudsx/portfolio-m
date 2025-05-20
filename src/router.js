import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact.vue';

const routes = [
  { path: '/', component: Home, meta: { title: 'Home | Snowdev' }},
  { path: '/about', component: About, meta: { title: 'About | Snowdev' }},
  { path: '/projects', component: Projects, meta: { title: 'Projects | Snowdev' }},
  { path: '/contact', component: Contact, meta: { title: 'Contact Me | Snowdev' }}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
