<template>
  <f7-page>
    <f7-navbar large title="About" title-large="Les utilisateurs" back-link="Framework7"></f7-navbar>
    <f7-toolbar tabbar bottom>
        <f7-link tab-link="#tab-1" tab-link-active>Tous les utilisateurs</f7-link>
        <f7-link tab-link="#tab-2">Les admins</f7-link>
        <f7-link tab-link="#tab-3">Les développeurs</f7-link>
        <f7-link tab-link="#tab-4">Les managers</f7-link>
  </f7-toolbar>
    <f7-tabs swipeable>
 <f7-tab id="tab-1" tab-active>
    <f7-block-title>Liste de tous les utilisateurs</f7-block-title>
        <f7-list >
        <f7-list-item v-for="user in users" :key="user.id" :title="user.firstname"  @click="getUser(user.id)">
                <!-- :link="`/insecte/${insecte.id}/`" media="static/img/icon-insecte.png"> -->
            </f7-list-item>
        </f7-list>    
 </f7-tab>
 <f7-tab id="tab-2"  >
    <f7-block-title>Liste des administrateurs</f7-block-title>
        <f7-list>
        <f7-list-item v-for="admin in admins" :key="admin.id" :title="admin.firstname" @click="getUser(admin.id)">
                <!-- :link="`/insecte/${insecte.id}/`" media="static/img/icon-insecte.png"> -->
            </f7-list-item>
        </f7-list>    
 </f7-tab>
  <f7-tab id="tab-3" >
    <f7-block-title>Liste des développeurs</f7-block-title>
        <f7-list>
        <f7-list-item v-for="developer in developers" :key="developer.id" :title="developer.firstname" @click="getUser(developer.id)">
                <!-- :link="`/insecte/${insecte.id}/`" media="static/img/icon-insecte.png"> -->
            </f7-list-item>
        </f7-list>    
 </f7-tab>
 <f7-tab id="tab-4"  >
    <f7-block-title>Liste des managers</f7-block-title>
        <f7-list>
        <f7-list-item v-for="manager in managers" :key="manager.id" :title="manager.firstname" @click="getUser(manager.id)">
                <!-- :link="`/insecte/${insecte.id}/`" media="static/img/icon-insecte.png"> -->
            </f7-list-item>
        </f7-list>    
 </f7-tab>
</f7-tabs>
    <f7-block-title class="searchbar-hide-on-search">Themes</f7-block-title>
    <f7-list class="searchbar-hide-on-search">
      <f7-list-item title="iOS Theme" external link="./index.html?theme=ios"></f7-list-item>
      <f7-list-item title="Material (MD) Theme" external link="./index.html?theme=md"></f7-list-item>
      <f7-list-item title="Color Themes" link="/color-themes/"></f7-list-item>
      <f7-list-item title="Github" external link="https://github.com/kevinqqnj"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import Axios from "axios";

export default {
    created () {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
    var sortByProperty = function (property) {
    return function (x, y) {
        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
};
app.preloader.show();
  setTimeout(function () {
   app.preloader.hide();
 }, 3000);

//ALL USERS
    Axios.get("http://localhost:8180"+'/users').then(response => {
      this.users = response.data
      //.sort(sortByProperty('firstname'));
      app.preloader.hide();

    //  console.log(response.data)
      }).catch(
    function (error) {
      app.preloader.hide();
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données")
    }
  );

//ALL DEVS
    Axios.get("http://localhost:8180"+'/simple_users').then(response => {
      this.developers = response.data
      //.sort(sortByProperty('firstname'));
      app.preloader.hide();

    //  console.log(response.data)
      }).catch(
    function (error) {
      app.preloader.hide();
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données")
    }
  );
//ALL MANAGERS
    Axios.get("http://localhost:8180"+'/managers').then(response => {
      this.managers = response.data
      //.sort(sortByProperty('firstname'));
      app.preloader.hide();

    //  console.log(response.data)
      }).catch(
    function (error) {
      app.preloader.hide();
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données")
    }
  );

//ALL ADMINS
    Axios.get("http://localhost:8180"+'/admins').then(response => {
      this.admins = response.data
      //.sort(sortByProperty('firstname'));
      app.preloader.hide();

    //  console.log(response.data)
      }).catch(
    function (error) {
      app.preloader.hide();
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données")
    }
  );
    },

        methods: {
        getUser: function(id)
        {      
             const self = this;
             const app = self.$f7;
            const router = self.$f7router;
            router.back(`/admin-userDetails/${id}/`, {
              ignoreCache: true,
              force: true,
              context: {}
            });
        }
    },
        data: function () {

      return {
        developers: [],
        users: [],
        managers: [],
        admins: []

      };
      
    }};
</script>
