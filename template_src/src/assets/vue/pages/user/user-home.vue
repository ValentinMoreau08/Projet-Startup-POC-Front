<template>
  <f7-page>
    <f7-navbar title="Utilisateur">
      <f7-nav-right>
         <f7-link class="panel-open" panel-open="#panel-user" icon="fas fa-bars"></f7-link>

      </f7-nav-right>
     
    </f7-navbar>
    <f7-block-title>Accueil utilisateur</f7-block-title>
    <!-- <f7-block inner>
      <p>This is template for Framework75, Vue and Phonegap.</p>
    </f7-block> -->
    <f7-block-title class="searchbar-found"
      >Qu'est-ce que je peux faire ?</f7-block-title
    >
    <f7-list class="components-list searchbar-found">
      <f7-list-item
        link="/listProjects-user/"
        title="Liste des projets"
        panel-close
      >
        <f7-icon slot="media" ios="f7:info" md="material:info"></f7-icon>
      </f7-list-item>
      <f7-list-item
        external
        link="http://localhost:8180/users/1/exportDoc"
        title="Générer compte-rendu (docx)"
        panel-close
      >
        <f7-icon slot="media" ios="f7:arrow_down_doc_fill" md="material:file_download"></f7-icon>
      </f7-list-item>
      <f7-list-item
        link="/create-time/"
        title="Saisir mes temps"
        panel-close
      >
              <f7-icon slot="media" ios="f7:timer" md="material:more_time"></f7-icon>
      </f7-list-item>
      <f7-list-item
        link="/times-user/"
        title="Consulter mes temps"
        panel-close
      >
              <f7-icon slot="media" ios="f7:timer" md="material:query_builder"></f7-icon>

      </f7-list-item>
    </f7-list>
   
  </f7-page>
</template>
<script>
import axios from 'axios';

export default {
  components: {},
  methods: {
    // generateDoc: function() {
     
    //   axios({
    //     url: "http://localhost:8180/users/1/exportDoc",
    //    method: 'GET',
    //   responseType: 'blob', 
    //      headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    //         }
    // }).then((response) => {
    //   console.log(response)
    //   const url = window.URL.createObjectURL(new Blob([response.data]));
    //   const link = document.createElement('a');
    //   link.href = url;
    //   link.setAttribute('download', 'export_1.docx');
    //         link.setAttribute('class', 'external');
    //   document.body.appendChild(link);
    //   link.click();
    // });
    // }
  }
};
</script>
