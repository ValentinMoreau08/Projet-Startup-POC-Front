<template>
  <f7-page>
    <f7-navbar title="Rôle d'un utilisateur" back-link="Back">
                    <f7-nav-right>
        <f7-link class="panel-open" panel-open="#panel-admin" icon="fas fa-bars"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <div class="block block-strong">
      <p>Rôle d'un utilisateur</p>
    </div>
   <f7-list form v-on:submit.prevent="changeRole">
      <f7-list-input label="Utilisateur"
        type="select"
        placeholder="Utilisateur"
        @input="form.userId = $event.target.value"
        v-model="form.userId">
      <option v-for="developer in developers" :key="developer.id" :value="developer.id">{{developer.id}} - {{developer.firstname}}</option>
      </f7-list-input>  
  <f7-list-input label="Rôle"
        type="select"
        placeholder="Rôle"
        @input="form.roleId = $event.target.value"
        v-model="form.roleId">
      <option v-for="role in roles" :key="role.id" :value="role.id">{{role.id}} - {{role.label}}</option>
      </f7-list-input>  

    <f7-button large small fill @click="changeRole">SUBMIT </f7-button>

    </f7-list>
  </f7-page>
</template>
<script>
import Axios from "axios";

  export default {
        data: function () {

      return {
        

        developers: [],
        roles: [],
        form:{
            roleId:' ',
            userId:' ',
        }

      };
      
      
    },
      methods: {
         changeRole : function(){
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
        var currentLoggedIn = localStorage.getItem('currentloggedin');
            Axios.patch("http://localhost:8180"+'/users/roles/'+currentLoggedIn+'/'+this.form.userId+"/"+this.form.roleId,
            ).then(response => {
                app.preloader.hide();
                app.dialog.alert("Rôle changé avec succès","StartUp POC");
                console.log(response)
            }).catch(
            function (error) {
                app.preloader.hide();
                app.dialog.alert("On a rencontré une erreur pendant la récupération des données");
            }
        );
        
          },
      },
       
      
  created () {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;

        app.preloader.show();
        setTimeout(function () {
        app.preloader.hide();
        }, 3000);


    Axios.get("http://localhost:8180"+'/roles').then(response => {
      this.roles = response.data;
      app.preloader.hide();

    //  console.log(response.data)
      }).catch(
    function (error) {
      app.preloader.hide();
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données")
    }
  );
 Axios.get("http://localhost:8180"+'/users').then(response => {
      this.developers = response.data;
    
      app.preloader.hide();

    //  console.log(response.data)
      }).catch(
    function (error) {
      app.preloader.hide();
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données");
    }
  );
  },
    
    

      
  }
</script>
