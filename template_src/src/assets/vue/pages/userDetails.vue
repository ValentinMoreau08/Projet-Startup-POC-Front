<template>
  <f7-page>
    <f7-navbar large title="About" title-large="Les utilisateurs" back-link="back">
                  <f7-nav-left>
        <f7-link class="panel-open" open-panel="left" icon="fas fa-bars"></f7-link>
      </f7-nav-left>
    </f7-navbar>
 <f7-block-title>Details </f7-block-title>
        <f7-chip v-if="user.role !==undefined" :text="user.role.label" color="red"></f7-chip>
        <div class="row no-gap">
          <div class="col"> <strong> ID: </strong></div>
          <div class="col">  {{ user.id}} </div>
        </div>
        <div class="row no-gap">
          <div class="col"> <strong> Login: </strong></div>
          <div class="col">  {{ user.login}} </div>
        </div>
        <div class="row no-gap">
          <div class="col"> <strong> Prénom: </strong></div>
          <div class="col">  {{ user.firstname}} </div>
        </div>
        <div class="row no-gap">
          <div class="col"> <strong> Nom: </strong></div>
          <div class="col">  {{ user.name}} </div>
        </div>         
        <div class="row no-gap" v-if="user.manager !== undefined && user.manager !== null ">          
            <div class="col"> <strong> Manager: </strong></div>
          <div class="col" @click="getUser(user.manager.id)">  {{user.manager.firstname}} </div>
        </div>
        <h4 v-else></h4>

      <f7-list v-if="user.role !==undefined && user.role.id == 2 ">
              <f7-block-title>Liste des développeurs rattachés:</f7-block-title>

     <f7-list-item v-for="managedUser in user.managed" :key="managedUser.id" @click="getUser(managedUser.id)"> <strong> {{managedUser.firstname}} </strong> </f7-list-item>
      </f7-list>

      <f7-block-title>Les temps saisis</f7-block-title>
  <f7-list accordion-list inset>
    <f7-list-item accordion-item title="Les temps en détail">
      <f7-accordion-content>
        <f7-block>
              <f7-list media-list v-if="user.times !==undefined && user.times !== null ">
               <f7-list-item v-for="thistime in user.times" :key="thistime.id" :link="`/admin-userDetails/${user.id}/`" :header="thistime.project.name" :subtitle="'Temps saisi :'+thistime.time" :after="thistime.date"></f7-list-item>
              </f7-list>
        </f7-block>
      </f7-accordion-content>
    </f7-list-item>
        <f7-list-item accordion-item title="Temps total">
                <f7-accordion-content>
        <f7-block>
            {{totalTime}}
        </f7-block>
      </f7-accordion-content>
        </f7-list-item>

  </f7-list>
      
    <f7-link @click="$f7router.back(`/lists-admin/`, {
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

     await Axios.get("http://localhost:8180"+'/managers').then(response => {
      this.managers = response.data;
      app.preloader.hide();

    //  console.log(response.data)
      }).catch(
    function (error) {
      app.preloader.hide();
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données")
    }
  );

   await Axios.get("http://localhost:8180"+'/users').then(response => {
    var userId = this.$f7route.params.id;
    var currentUser;
        console.log(userId);
    console.log(response.data);
      this.users = response.data;
      this.users.forEach(function (one) {
        if (one.id == userId) {
           currentUser = one;
        }
        else {
        console.log("not found");
        }
      });
      app.preloader.hide();
      this.user = currentUser;
       var total = 0;
      this.user.times.forEach(function(one)
        {
          total+=one.time;
        }
        );
        this.totalTime = total;
      console.log(this.user);

    //  console.log(response.data)
      }).catch(
    function (error) {
      app.preloader.hide();
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données"+error)
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
        },

    },
    data: function () {

      return {
        users: [],
        user:'',
        totalTime: 0,
        managers: [],
        sheetOpened: false,
        form:
        {
          managerId: ' ',
        }
        

      };
      
    }
  };
</script>
