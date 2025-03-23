import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import learnAPI from '../views/LearnApi.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/learnApi', name: 'Belajar API', component: learnAPI },
];

const router = createRouter({ 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;