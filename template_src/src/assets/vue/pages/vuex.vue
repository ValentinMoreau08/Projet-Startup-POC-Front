<template>
  <div class="page no-navbar no-toolbar no-swipeback">
    <div class="page-content login-screen-content">
      <div class="login-screen-title">Startup POC Project</div>
      <form>
        <div class="list">
          <ul>
            <li class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Login</div>
                <div class="item-input-wrap">
                  <input type="text" name="username" required validate placeholder="Votre login" v-model="username"/>
                </div>
              </div>
            </li>
            <li class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Password</div>
                <div class="item-input-wrap">
                  <input type="password" name="password" required validate placeholder="Votre mot de passe" v-model="password"/>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li><a href="#" v-on:click="loginAction" class="list-button" >Se connecter</a></li>
          </ul>
          <!-- <div class="block-footer">
            <p><a href="#" class="link back">Close Login Screen</a></p>
          </div> -->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Axios from "axios";

export default {
  data() {
      return {
          users:[],
          username: '',
          password: ''
      }
    },
  created() {
    Axios.get("http://localhost:8180"+'/users').then(response => {
        this.users = response.data
        //console.log(response.data)
      }).catch(
      function (error) {
        console.log("oups")
      }
    );
  },
  components: {},
  computed: {
    ...mapState({
      user: state => state.user
    })
  },

  methods: {
    
    loginAction: function() {
      const { username, password } = this;
      const self = this;
          const app = self.$f7;
          const router = self.$f7router;
      this.users.forEach(function(user){
        if (username == user.login && password == user.password) {
          app.dialog.alert("Utilisateur connecté: "+user.name,"StartUp POC");
          localStorage.setItem('currentloggedin',user.id);
          console.log(localStorage.getItem('currentloggedin'));
          console.log(user.role.id);
          if(user.role.id == 3)
            {  
              router.back(`/user-home/`, {
                ignoreCache: true,
                force: true,
                context: {}
              });
            };
          if(user.role.id == 2)
            {router.back(`/manager-home/`, {
                ignoreCache: true,
                force: true,
                context: {}
              });
            };       
          if(user.role.id == 1)
            {router.back(`/admin-home/`, {
                ignoreCache: true,
                force: true,
                context: {}
              });
            }; 
        }
        else{
          console.log("not ok");
          //app.dialog.alert("Votre login ou votre mot de passe est incorrect" ,"StartUp POC");

        };
      })

    },
    ...mapActions(["userLogged"])
  }
};
</script>