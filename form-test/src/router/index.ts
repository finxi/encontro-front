import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: 'Início' },
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
const DEFAULT_TITLE = 'Formulário';

router.afterEach((to, _from) => {
  Vue.nextTick(() => {
    document.title = to.meta?.title || DEFAULT_TITLE;
  });
});

export default router;
