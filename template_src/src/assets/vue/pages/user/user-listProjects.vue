<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
         <f7-link href="/user-home/"  icon-f7="house"></f7-link>
      </f7-nav-left>
<div class="title">Les projets</div>
          <f7-nav-right>
         <f7-link class="panel-open" panel-open="#panel-user" icon="fas fa-bars"></f7-link>

      </f7-nav-right>

    </f7-navbar>
    <f7-block-title class="searchbar-found">Liste des projets</f7-block-title>
    <f7-list class="components-list searchbar-found">
      <f7-list-item
        v-for="project in projects"
        :key="project.id"
        :title="project.name"
        :link="`/projectDetails/${project.id}/`" after="Voir plus de détails"
      >
      </f7-list-item>
    </f7-list>

   
  </f7-page>
</template>
<script>
import Axios from "axios";

export default {
  created() {
    const self = this;
    const app = self.$f7;
    const router = self.$f7router;
    var sortByProperty = function(property) {
      return function(x, y) {
        return x[property] === y[property]
          ? 0
          : x[property] > y[property]
          ? 1
          : -1;
      };
    };
    app.preloader.show();
    setTimeout(function() {
      app.preloader.hide();
    }, 3000);

    //ALL PROJECTS
    Axios.get("http://localhost:8180" + "/projects")
      .then(response => {
        this.projects = response.data;
        //.sort(sortByProperty('firstname'));
        app.preloader.hide();

        //  console.log(response.data)
      })
      .catch(function(error) {
        app.preloader.hide();
        app.dialog.alert(
          "On a rencontré une erreur pendant la récupération des données","StartUp POC"
        );
      });
  },
  data: function() {
    return {
      projects: []
    };
  }
};
</script>
