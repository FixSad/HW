import { createRouter, createWebHistory } from 'vue-router';
import FirstTest from '../components/FirstTest.vue';
import SecondTest from '../components/SecondTest.vue';
import ThirdTest from '../components/ThirdTest.vue';
import FourthTest from '../components/FourthTest.vue';
import FifthTest from '../components/FifthTest.vue';

const routes = [
  { path: '/first', component: FirstTest },
  { path: '/second', component: SecondTest},
  { path: '/third', component: ThirdTest},
  { path: '/fourth', component: FourthTest},
  { path: '/fifth', component: FifthTest},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;