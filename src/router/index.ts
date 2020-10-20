import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// import Home from '../views/Home.vue';
import { createRoutes } from '@/utils/router';
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     component: Home,
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ '../views/About.vue'),
//   },
// ];
const routes = createRoutes();
console.log('routes :>> ', routes);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
