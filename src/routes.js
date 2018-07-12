import List from 'views/list.vue';
export default [
  { path: '*', redirect: '/list' },
  {
      path: '/list',
      name: 'list',
      component: List
  },
];
