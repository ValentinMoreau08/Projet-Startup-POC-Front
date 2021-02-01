import Home from './assets/vue/pages/home.vue';
import AboutPage from './assets/vue/pages/about.vue';
import FormPage from './assets/vue/pages/form.vue';
import DynamicRoutePage from './assets/vue/pages/dynamic-route.vue';
//ADMIN
import AdminListsPage from './assets/vue/pages/listsAdmin.vue';
import AdminHomePage from './assets/vue/pages/admin-home.vue';
import AdminUserDetailPage from './assets/vue/pages/admin-userDetails.vue'


import PanelLeftPage from './assets/vue/pages/panel-left.vue';
import ColorThemes from './assets/vue/pages/color-themes.vue';
import Chat from './assets/vue/pages/chat.vue';
import Vuex from './assets/vue/pages/vuex.vue';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/admin-home/',
    component: AdminHomePage
  },
  {
    path: '/lists-admin/',
    component: AdminListsPage
  },
  {
    path: '/admin-userDetails/:id/',
    component: AdminUserDetailPage
  },
  {
    path: '/about/',
    component: AboutPage
  },
  {
    path: '/form/',
    component: FormPage
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage
  },
  {
    path: '/color-themes/',
    component: ColorThemes
  },
  {
    path: '/chat/',
    component: Chat
  },
  {
    path: '/vuex/',
    component: Vuex
  },
];
