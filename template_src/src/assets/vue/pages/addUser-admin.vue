<template>
  <f7-page>
    <f7-navbar title="Ajouter un utilisateur" back-link="Back">
            <f7-nav-left>
        <f7-link class="panel-open" open-panel="left" icon="fas fa-bars"></f7-link>
      </f7-nav-left>
    </f7-navbar>
    <div class="block block-strong">
      <p>Ajouter un utilisateur</p>
    </div>
    <form class="list form-store-data" id="add-user-form">
      <ul>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label" >Nom</div>
            <div class="item-input-wrap">
                   <input name="name" type="text" placeholder="Nom" required validate>

            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Firstname</div>
            <div class="item-input-wrap">
              <input name="firstname" type="text" placeholder="Firstname" required validate>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Login</div>
            <div class="item-input-wrap">
              <input name="login" type="text" placeholder="Login" required validate>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Mot de passe</div>
            <div class="item-input-wrap">
              <input name="password" type="text" placeholder="Password" required validate>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Rôle</div>
            <div class="item-input-wrap">
              <input v-for="role in roles" :key="role.id" :value="role.id" name="role" type="radio" placeholder="Password" required validate>
            </div>
          </div>
        </li>
        
      </ul>
    </form>

    <f7-button fill @click="addUser">Ajouter</f7-button>
  </f7-page>
</template>

<script>
import axios from 'axios';
export default {
  name: 'about',
  data: function() {
      return {
        errors: [],
        projects: [],
        form:
        {
          roleId:' '
        }
      }
  },
  props: {
    msg: String
  },
  mounted: function() {
      axios
        .get('http://localhost:8180/projects')
        .then(response => {
          console.log(response.data)
          this.projects = response.data;
        })
  },
  methods: {
    // Post method to create time with body
    addUser() {
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
      // Get data time, projectId and date from Form object
      var formEl = this.$$('form#add-user-form')[0];
      var formData = new window.FormData(formEl);
      const options = {
        headers: {'Content-Type': 'application/json'}
      };

      axios.post('http://localhost:8180/users', {
        name: formData.get('name'),
        firstname: formData.get('firstname'),
        login: formData.get('login'),
        password: formData.get('password'),

      }, options)
      .then(response => {
        this.$f7router.back()
      })
      .catch(e => {
        this.errors.push(e)
        alert(e)
      })
    }
  }
}
</script>