import { createRouter, createWebHistory } from 'vue-router';
import FirstTest from '../components/FirstTest.vue';

const routes = [
  { path: '/first', component: FirstTest },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;