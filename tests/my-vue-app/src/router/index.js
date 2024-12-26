import { createRouter, createWebHistory } from 'vue-router';
import FirstTest from '../components/FirstTest.vue';
import SecondTest from '../components/SecondTest.vue';

const routes = [
  { path: '/first', component: FirstTest },
  { path: '/second', component: SecondTest},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;