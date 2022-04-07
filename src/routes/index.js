export const routes = [
  {
    path: '/',
    component: () => import('@/layout/BaseLayout.vue'),
    children: [
      { name: 'root', path: '/', redirect: 'home' },
      {
        name: 'home',
        path: '/home',
        component: () => import('@/pages/Home.vue'),
      },
      {
        name: 'bar',
        path: '/bar',
        component: () => import('@/pages/Bar.vue'),
      },
      {
        name: '404',
        path: '/404',
        component: () => import('@/pages/NotFound.vue'),
      },
    ],
  },
  { path: '/:catchAll(.*)', redirect: '404' },
]
