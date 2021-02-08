<template>
  <f7-page>
    <f7-navbar title="Détails de l'utilisateur" back>
    </f7-navbar>
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
               <f7-list-item v-for="thistime in user.times" :key="thistime.id" :link="`/admin-userDetails/${user.id}/`" :header="thistime.project.name" :subtitle="'Temps saisi :'+thistime.time +' heures'" :after="thistime.date"></f7-list-item>
              </f7-list>
        </f7-block>
      </f7-accordion-content>
    </f7-list-item>
        <f7-list-item accordion-item title="Temps total">
                <f7-accordion-content>
        <f7-block>
            {{totalTime}} heures
        </f7-block>
      </f7-accordion-content>
        </f7-list-item>
        <f7-button fill sheet-open=".demo-sheet">Ajouter un manager</f7-button>
      <f7-block>
        <f7-button data-force="true" class="back"> Retour </f7-button>
      </f7-block>
        <f7-sheet class="demo-sheet" :opened="sheetOpened" @sheet:closed="sheetOpened = false">
    <f7-toolbar>
      <div class="left"></div>
      <div class="right">
        <f7-link sheet-close>Close</f7-link>
      </div>
    </f7-toolbar>
    <!-- Scrollable sheet content -->
    <f7-page-content>
      <f7-block>
          <f7-list-input label="Manager"
        type="select"
        placeholder="Manager"
        @input="form.managerId = $event.target.value"
        v-model="form.managerId">
      <option v-for="manager in managers" :key="manager.id" :value="manager.id">{{manager.id}} - {{manager.firstname}}</option>
      </f7-list-input>
              <f7-button fill sheet-close @click="addManager" >Ajouter un manager</f7-button>

      </f7-block>
    </f7-page-content>

  </f7-sheet>
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
        addManager: function(id)
        {
             const self = this;
        const app = self.$f7;
        const router = self.$f7router;
                var currentLoggedIn = localStorage.getItem('currentloggedin');

            Axios.patch("http://localhost:8180"+'/users/'+currentLoggedIn+'/'+this.user.id+"/"+this.form.managerId,
            ).then(response => {
                app.preloader.hide();
                app.dialog.alert("User added successfully");
                console.log(response)
            }).catch(
            function (error) {
                app.preloader.hide();
                app.dialog.alert("On a rencontré une erreur pendant la récupération des données");
            }
        );
        },
        back(){
                   
      router.back(`/admin-home/`, {
                ignoreCache: true,
                force: true,
                context: {}
              });
        }
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
