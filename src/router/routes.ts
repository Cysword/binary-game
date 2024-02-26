export const routes = [
  {
    path: '/',
    name: 'game',
    component: () => import('@/Views/Game/GameIndex.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/Views/Settings.vue')
  }
];
