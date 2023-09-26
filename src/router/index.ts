import { createRouter, createWebHistory } from 'vue-router';
import forms from '@/views/forms/forms.view.vue';
import preview from '@/views/preview/preview.view.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: forms,
    },
    {
      path: '/preview',
      name: 'preview',
      component: preview,
    },
  ],
});

export default router;
