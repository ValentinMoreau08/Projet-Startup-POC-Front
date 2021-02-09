import Vuex from './assets/vue/pages/vuex.vue';
import DynamicRoutePage from './assets/vue/pages/dynamic-route.vue';
//ADMIN
import AdminListsPage from './assets/vue/pages/admin/listsAdmin.vue';
import AdminHomePage from './assets/vue/pages/admin/admin-home.vue';
import AdminUserDetailPage from './assets/vue/pages/admin/admin-userDetails.vue';
import AdminListProjectsPage from './assets/vue/pages/admin/admin-listProjects.vue';
import AdminProjectDetailsPage from './assets/vue/pages/admin/admin-projectDetails.vue';
import AdminChangeRolePage from './assets/vue/pages/admin/admin-changeRole.vue';
import AdminAddUserPage from './assets/vue/pages/admin/addUser-admin.vue';
import AdminChangeManagerPage from './assets/vue/pages/admin/admin-changeManager.vue';
import AdminPanelLeftPage from './assets/vue/pages/admin/admin-panel-left.vue';
//USER
import UserListProjectsPage from './assets/vue/pages/user/user-listProjects.vue';
import UserHomePage from './assets/vue/pages/user/user-home.vue';
import UserTimesPage from './assets/vue/pages/user/user-times.vue';
import UserPanelLeftPage from './assets/vue/pages/user/user-panel-left.vue';
import UserGeneratePage from './assets/vue/pages/user/user-generate.vue'

//MANAGER
import ManagerHomePage from './assets/vue/pages/manager/manager-home.vue';
import ManagerMyDevelopersPage from './assets/vue/pages/manager/manager-mydevelopers.vue'
import CreateTimePage from './assets/vue/pages/create-time.vue';
import CreateProjectPage from './assets/vue/pages/create-project.vue';
import UserDetailPage from './assets/vue/pages/userDetails.vue';
import ManagerPanelLeftPage from './assets/vue/pages/manager/manager-panel-left.vue';
import ManagerListProjectsPage from './assets/vue/pages/manager/manager-listProjects.vue';
import ProjectDetailPage from './assets/vue/pages/projectDetails.vue';
import ManagerGeneratePage from './assets/vue/pages/manager/manager-generate.vue';

export default [
  {
    path: '/',
    component: Vuex
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
  {
    path: '/projectDetails/:id/',
    component: ProjectDetailPage
  },
  {
    path: '/user-generate/',
    component: UserGeneratePage
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
    path: '/listProjects-manager/',
    component: ManagerListProjectsPage
  },

  {
    path: '/manager-generate/',
    component: ManagerGeneratePage
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  },

  //PANELS
  {
    path: '/admin-panel-left/',
    component: AdminPanelLeftPage
  },
  {
    path: '/user-panel-left/',
    component: UserPanelLeftPage
  },
  {
    path: '/manager-panel-left/',
    component: ManagerPanelLeftPage
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
