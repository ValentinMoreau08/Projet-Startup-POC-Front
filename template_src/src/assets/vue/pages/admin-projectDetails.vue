<template>
  <f7-page>
    <f7-navbar large title="About" title-large="Les projets" back-link="Framework7"></f7-navbar>
    <div class="block-title block-title-medium">{{ project.name}}</div>
    <f7-block inner>
      <p> <strong> Client :</strong> {{ project.clientName}} </p>
      <p> <strong>Description :</strong> {{project.description}} </p>
    </f7-block>
      <f7-block-title>Les temps saisis</f7-block-title>
  <f7-list accordion-list inset>
    <f7-list-item accordion-item title="Les temps en détail">
      <f7-accordion-content>
        <f7-block>
              <f7-list media-list v-if="project.times !==undefined && project.times !== null ">
               <f7-list-item v-for="thistime in project.times" :key="thistime.id" :link="`/admin-userDetails/${thistime.user.id}/`" :header="thistime.user.firstname" :subtitle="'Temps saisi :'+thistime.time" :after="thistime.date"></f7-list-item>
              </f7-list>
    
        </f7-block>
      </f7-accordion-content>
    </f7-list-item>
        <f7-list-item accordion-item title="Temps total passé sur ce projet">
        </f7-list-item>
  </f7-list>
          <!-- <p > <strong> Projet: </strong></p>
          <p class="col">  {{ project.name}} </p>
        <div class="row no-gap">
          <div class="col"> <strong> Client: </strong></div>
          <div class="col">  {{ project.clientName}} </div>
        </div>         
        
        <div class="row no-gap" >          
            <div class="col"> <strong> Description: </strong></div>
          <div class="col">  {{project.description}} </div>
        </div> -->

    <f7-link @click="$f7router.back(`/listProjects-admin/`, {
              ignoreCache: true,
              force: true,
              context: {}
            })">back</f7-link>
  </f7-page>
</template>
<script>
import Axios from "axios";

export default {
   async created () {
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


   await Axios.get("http://localhost:8180"+'/projects').then(response => {
    var projectId = this.$f7route.params.id;
    var currentProject;
        console.log(projectId);
    console.log(response.data);
      this.projects = response.data;
      this.projects.forEach(function (one) {
        if (one.id == projectId) {
           currentProject = one;
        }
        else {
        console.log("not found");
        }
      });
      app.preloader.hide();
      this.project = currentProject;
      console.log(this.project);

    //  console.log(response.data)
      }).catch(
    function (error) {
      app.preloader.hide();
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données"+error)
    }
  );
    },
     
    data: function () {

      return {
        projects: [],
        project:'',
        

      };
      
    }
  };
</script>
