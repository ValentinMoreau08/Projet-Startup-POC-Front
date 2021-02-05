<template>
  <f7-page>
    <f7-navbar large title="About" title-large="Les projets" back-link="back">
                  <f7-nav-left>
        <f7-link class="panel-open" open-panel="left" icon="fas fa-bars"></f7-link>
      </f7-nav-left>
    </f7-navbar>
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
                <f7-accordion-content>
        <f7-block>
            {{totalTime}}
        </f7-block>
      </f7-accordion-content>
        </f7-list-item>
  </f7-list>
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
      var total = 0;
      this.project.times.forEach(function(one)
        {
          total+=one.time;
        }
        );
        this.totalTime = total;
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
        totalTime: 0
        

      };
      
    }
  };
</script>
