<template>
  <f7-page>
    <f7-navbar title="Saisir mes temps" back-link="Back"></f7-navbar>
    <div class="block block-strong">
      <p>Saisissez le temps passé sur un projet à une date donnée</p>
    </div>
    <form class="list form-store-data" id="create-time-form">
      <ul>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Projet</div>
            <div class="item-input-wrap">
              <select name="projectId" placeholder="Please choose...">
                <option v-for="project in projects" :key="project.id" v-bind:value="project.id">{{ project.name }} - {{ project.clientName }}</option>
              </select>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Date</div>
            <div class="item-input-wrap">
              <input name="date" type="date" placeholder="Please choose...">
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Durée (en heure)</div>
            <div class="item-input-wrap">
              <input name="time" type="number" placeholder="Please choose...">
            </div>
          </div>
        </li>
      </ul>
    </form>
    <f7-button @click="postCreateTime">Créer</f7-button>
  </f7-page>
</template>

<script>
import axios from 'axios';

export default {
  name: 'about',
  data: function() {
      return {
        errors: [],
        projects: []
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
    postCreateTime() {
      // Get data time, projectId and date from Form object
      var formEl = this.$$('form#create-time-form')[0];
      var formData = new window.FormData(formEl);

      const options = {
        headers: {'Content-Type': 'application/json'}
      };
   const currentLoggedIn = localStorage.getItem('currentloggedin');
      axios.post('http://localhost:8180/users/'+currentLoggedIn+'/times', {
        time: formData.get('time'),
        projectId: formData.get('projectId'),
        date: formData.get('date')
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