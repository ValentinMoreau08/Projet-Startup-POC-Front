<template>
  <f7-page>
    <f7-navbar title="Changer le manager d'un développeur" back-link="Back">
            <f7-nav-right>
        <f7-link class="panel-open" panel-open="#panel-admin" icon="fas fa-bars"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <div class="block block-strong">
      <p>Changer le manager d'un développeur</p>
    </div>
   <f7-list form v-on:submit.prevent="addUser">
      <f7-list-input label="Développeur"
        type="select"
        placeholder="Développeur"
        @input="form.userId = $event.target.value"
        v-model="form.userId">
      <option v-for="developer in developers" :key="developer.id" :value="developer.id">{{developer.id}} - {{developer.firstname}}</option>
      </f7-list-input>  
   <f7-list-input label="Manager"
        type="select"
        placeholder="Manager"
        @input="form.managerId = $event.target.value"
        v-model="form.managerId">
      <option v-for="manager in managers" :key="manager.id" :value="manager.id">{{manager.id}} - {{manager.firstname}}</option>
      </f7-list-input>

      <!-- <f7-list-item v-for="developer in developers" 
      :key="developer.id" 
      checkbox name="my-checkbox" 
      :title="developer.firstname"
      @change="checkDeveloper($event,developer.id)"
      ></f7-list-item> -->
    <f7-button large small fill>SUBMIT </f7-button>

    </f7-list>
        <f7-link back>back</f7-link>
  </f7-page>
</template>
<script>
import Axios from "axios";

  export default {
        data: function () {

      return {
               addUser : function(){
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
            Axios.patch("http://localhost:8180"+'/users/'+this.form.userId+"/"+this.form.managerId,
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
        developers: [],
        managers: [],
        form:{
            managerId:' ',
            userId:' ',
        }

      };
      
      
    },
      methods: {
 
      },
       
      
  created () {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;

        app.preloader.show();
        setTimeout(function () {
        app.preloader.hide();
        }, 3000);


    Axios.get("http://localhost:8180"+'/managers').then(response => {
      this.managers = response.data;
      app.preloader.hide();

    //  console.log(response.data)
      }).catch(
    function (error) {
      app.preloader.hide();
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données","StartUp POC")
    }
  );
 Axios.get("http://localhost:8180"+'/simple_users').then(response => {
      this.developers = response.data;
    
      app.preloader.hide();

    //  console.log(response.data)
      }).catch(
    function (error) {
      app.preloader.hide();
      app.dialog.alert("On a rencontré une erreur pendant la récupération des données","StartUp POC");
    }
  );
  },
    
    

      
  }
</script>
