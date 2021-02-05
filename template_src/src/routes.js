import Home from './assets/vue/pages/home.vue';
import AboutPage from './assets/vue/pages/about.vue';
import FormPage from './assets/vue/pages/form.vue';
import DynamicRoutePage from './assets/vue/pages/dynamic-route.vue';
//ADMIN
import AdminListsPage from './assets/vue/pages/listsAdmin.vue';
import AdminHomePage from './assets/vue/pages/admin-home.vue';
import AdminUserDetailPage from './assets/vue/pages/admin-userDetails.vue';
import AdminListProjectsPage from './assets/vue/pages/admin-listProjects.vue';
import AdminProjectDetailsPage from './assets/vue/pages/admin-projectDetails.vue';
import AdminChangeRolePage from './assets/vue/pages/admin-changeRole.vue';
import AdminAddUserPage from './assets/vue/pages/addUser-admin.vue';
import AdminChangeManagerPage from './assets/vue/pages/admin-changeManager.vue';

//USER
import UserListProjectsPage from './assets/vue/pages/user-listProjects.vue';
import UserHomePage from './assets/vue/pages/user-home.vue';
import UserTimesPage from './assets/vue/pages/user-times.vue';

//MANAGER
import ManagerHomePage from './assets/vue/pages/manager-home.vue';
import ManagerMyDevelopersPage from './assets/vue/pages/manager-mydevelopers.vue'
import CreateTimePage from './assets/vue/pages/create-time.vue';
import CreateProjectPage from './assets/vue/pages/create-project.vue';
import UserDetailPage from './assets/vue/pages/userDetails.vue';


import PanelLeftPage from './assets/vue/pages/panel-left.vue';
import ColorThemes from './assets/vue/pages/color-themes.vue';
import Chat from './assets/vue/pages/chat.vue';
import Vuex from './assets/vue/pages/vuex.vue';

export default [
  {
    path: '/',
    component: Home
  },
  //ADMIN
  {
    path: '/admin-home/',
    component: AdminHomePage
  },
  {
    path: '/lists-admin/',
    component: AdminListsPage
  },
  {
    path: '/listProjects-admin/',
    component: AdminListProjectsPage
  },
  {
    path: '/changeRole-admin/',
    component: AdminChangeRolePage
  },
  {
    path: '/admin-userDetails/:id/',
    component: AdminUserDetailPage
  },
  {
    path: '/admin-projectDetails/:id/',
    component: AdminProjectDetailsPage
  },
  {
    path: '/addUser-admin/',
    component: AdminAddUserPage
  },
  {
    path: '/changeManager-admin/',
    component: AdminChangeManagerPage
  },

  //USER
  {
    path: '/user-home/',
    component: UserHomePage
  },
  {
    path: '/listProjects-user/',
    component: UserListProjectsPage
  },
  {
    path: '/times-user/',
    component: UserTimesPage
  },

  //MANAGER
  {
    path: '/manager-mydevelopers/',
    component: ManagerMyDevelopersPage
  },
  {
    path: '/userDetails/:id/',
    component: UserDetailPage
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
  {
    path: '/create-time/',
    component: CreateTimePage
  },
  {
    path: '/create-project/',
    component: CreateProjectPage
  },
  {
    path: '/manager-home/',
    component: ManagerHomePage
  },
];
