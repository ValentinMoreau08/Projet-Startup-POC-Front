<template>
  <f7-page>
   <f7-navbar back-link="Back">
           <div class="title">Les utilisateurs</div>

      <f7-nav-right>
        <f7-link class="panel-open" open-panel="left" icon="fas fa-bars"></f7-link>
      </f7-nav-right>
     
    </f7-navbar>
    <f7-toolbar tabbar bottom>
        <f7-link tab-link="#tab-1" tab-link-active>Utilisateurs</f7-link>
        <f7-link tab-link="#tab-2">Admins</f7-link>
        <f7-link tab-link="#tab-3">Développeurs</f7-link>
        <f7-link tab-link="#tab-4">Managers</f7-link>
  </f7-toolbar>
    <f7-tabs swipeable>
 <f7-tab id="tab-1" tab-active>
    <f7-block-title class="searchbar-found">Liste de tous les utilisateurs</f7-block-title>
        <f7-list class="components-list searchbar-found">
        <f7-list-item v-for="user in users" :key="user.id" :title="user.firstname"  :link="`/admin-userDetails/${user.id}/`" after="Voir plus de détails">
                <!-- :link="`/insecte/${insecte.id}/`" media="static/img/icon-insecte.png"> -->
            </f7-list-item>
        </f7-list>    
 </f7-tab>
 <f7-tab id="tab-2"  >
    <f7-block-title class="searchbar-found">Liste des administrateurs</f7-block-title>
        <f7-list class="components-list searchbar-found">
        <f7-list-item v-for="admin in admins" :key="admin.id" :title="admin.firstname" :link="`/admin-userDetails/${admin.id}/`" after="Voir plus de détails">
                <!-- :link="`/insecte/${insecte.id}/`" media="static/img/icon-insecte.png"> -->
            </f7-list-item>
        </f7-list>    
 </f7-tab>
  <f7-tab id="tab-3" >
    <f7-block-title class="searchbar-found">Liste des développeurs</f7-block-title>
        <f7-list class="components-list searchbar-found">
        <f7-list-item v-for="developer in developers" :key="developer.id" :title="developer.firstname" :link="`/admin-userDetails/${developer.id}/`" after="Voir plus de détails">
                <!-- :link="`/insecte/${insecte.id}/`" media="static/img/icon-insecte.png"> -->
            </f7-list-item>
        </f7-list>    
 </f7-tab>
 <f7-tab id="tab-4"  >
    <f7-block-title class="searchbar-found" >Liste des managers</f7-block-title>
        <f7-list class="components-list searchbar-found" >
        <f7-list-item v-for="manager in managers" :key="manager.id" :title="manager.firstname" :link="`/admin-userDetails/${manager.id}/`" after="Voir plus de détails">
                <!-- :link="`/insecte/${insecte.id}/`" media="static/img/icon-insecte.png"> -->
            </f7-list-item>
        </f7-list>    
 </f7-tab>
</f7-tabs>
  
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
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données","StartUp POC")
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
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données","StartUp POC")
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
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données","StartUp POC")
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
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données","StartUp POC")
    }
  );
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
