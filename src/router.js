import {createWebHistory, createRouter} from 'vue-router';
import Home from './components/pages/Home.vue'
import Discover from './components/pages/Discover.vue'
import Join from './components/pages/Join.vue'

import MobHeader from './components/mobile/Header.vue'
import MobFooter from './components/mobile/Footer.vue'
import MobContent from './components/mobile/Content.vue'

import MobHome from './components/mobile/pages/Home.vue'
import MobDiscover from './components/mobile/pages/Discover.vue'
import MobJoin from './components/mobile/pages/Join.vue'

import Test from './components/pages/Test.vue'

const routes = [
  {
    path: '',
    name: 'home',
    component: MobHome
  },
  {
    path: '/discover',
    name: 'discover',
    component: MobDiscover
  },
  {
    path: '/join',
    name: 'join',
    component: MobJoin
  }
];

const history = createWebHistory();
const router = createRouter({history, routes});
export default router;