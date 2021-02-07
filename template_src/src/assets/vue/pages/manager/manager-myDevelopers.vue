<template>
  <f7-page>
    <f7-navbar back-link="back">
              <div class="title">Mes développeurs</div>

                        <f7-nav-right>
        <f7-link class="panel-open" panel-open="#panel-manager" icon="fas fa-bars"></f7-link>
      </f7-nav-right>
      </f7-navbar>
    <f7-block-title class="searchbar-found">Liste de mes développeurs</f7-block-title>
        <f7-list class="components-list searchbar-found">
        <f7-list-item v-for="user in users" :key="user.id" :title="user.name" :link="`/userDetails/${user.id}/`" after="Voir plus de détails">
                <!-- :link="`/insecte/${insecte.id}/`" media="static/img/icon-insecte.png"> -->
            </f7-list-item>
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

//Manged
    Axios.get("http://localhost:8180"+'/managers/32/managed').then(response => {
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


    },
        data: function () {

      return {
        users: [],


      };
      
    }};
</script>
