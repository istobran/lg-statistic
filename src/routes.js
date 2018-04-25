import GuangZhou from 'views/Guangzhou.vue';
export default [
  { path: '*', redirect: '/guangzhou' },
  {
      path: '/guangzhou',
      name: 'guangzhou',
      component: GuangZhou
  },
];
