<template>
  <f7-page>
    <f7-navbar title="Ajouter un projet" back-link="Back"></f7-navbar>
    <div class="block block-strong">
      <p>Ajouter un nouveau projet</p>
    </div>
    <form class="list form-store-data" id="create-project-form">
      <ul>
        
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Nom du projet</div>
            <div class="item-input-wrap">
              <input name="name" type="text" placeholder="Please choose...">
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Nom du client</div>
            <div class="item-input-wrap">
              <input name="clientName" type="text" placeholder="Please choose...">
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Description</div>
            <div class="item-input-wrap">
              <input name="description" type="text" placeholder="Please choose...">
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
        errors: []
      }
  },
  props: {
    msg: String
  },
  methods: {
    // Post method to create time with body
    postCreateTime() {
      // Get data time, projectId and date from Form object
      var formEl = this.$$('form#create-project-form')[0];
      var formData = new window.FormData(formEl);

      const options = {
        headers: {'Content-Type': 'application/json'}
      };

      axios.post('http://localhost:8180/projects', {
        name: formData.get('name'),
        clientName: formData.get('clientName'),
        description: formData.get('description')
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