import {createWebHistory, createRouter} from 'vue-router';
import Home from './components/pages/Home.vue'
import Discover from './components/pages/Discover.vue'
import Join from './components/pages/Join.vue'

import Test from './components/pages/Test.vue'

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover
  },
  {
    path: '/join',
    name: 'join',
    component: Join
  }
];

const history = createWebHistory();
const router = createRouter({history, routes});
export default router;