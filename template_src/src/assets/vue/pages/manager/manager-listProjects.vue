<template>
  <f7-page>
    <f7-navbar>
            <f7-nav-left>
         <f7-link href="/manager-home/"  icon-f7="house"></f7-link>
      </f7-nav-left>
                          <div class="title">Liste des projets</div>

                   <f7-nav-right>
        <f7-link class="panel-open" panel-open="#panel-manager" icon="fas fa-bars"></f7-link>
      </f7-nav-right>

      </f7-navbar>
    <f7-block-title class="searchbar-found">Liste des projets</f7-block-title>
        <f7-list class="components-list searchbar-found">
        <f7-list-item v-for="project in projects" :key="project.id" :title="project.name" :link="`/admin-projectDetails/${project.id}/`" after="Voir plus de détails">
                <!-- :link="`/insecte/${insecte.id}/`" media="static/img/icon-insecte.png"> -->
            </f7-list-item>
        </f7-list>    

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

//ALL PROJECTS
    Axios.get("http://localhost:8180"+'/projects').then(response => {
      this.projects = response.data
      //.sort(sortByProperty('firstname'));
      app.preloader.hide();

    //  console.log(response.data)
      }).catch(
    function (error) {
      app.preloader.hide();
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données","StartUP POC")
    }
  );


    },
        data: function () {

      return {
        projects: [],


      };
      
    }};
</script>
