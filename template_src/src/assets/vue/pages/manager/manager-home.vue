<template>
  <f7-page>
    <f7-navbar title="Manager">
      <f7-nav-right>
        <f7-link class="panel-open" panel-open="#panel-manager" icon="fas fa-bars"></f7-link>
      </f7-nav-right>
    </f7-navbar>     
    <f7-block-title>Accueil manager</f7-block-title>
    <!-- <f7-block inner>
      <p>This is template for Framework75, Vue and Phonegap.</p>
    </f7-block> -->
    <f7-block-title class="searchbar-found">Qu'est-ce que je peux faire ?</f7-block-title>
    <f7-list class="components-list searchbar-found">
      <f7-list-item link="/create-project/" title="Ajouter un projet" panel-close>
        <f7-icon slot="media" ios="f7:text_badge_plus" md="material:note_add"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/create-time/" title="Saisir mes temps" panel-close>
              <f7-icon slot="media" ios="f7:timer" md="material:more_time"></f7-icon>
      </f7-list-item>
            <f7-list-item link="/manager-mydevelopers/" title="Mes développeurs" panel-close>
        <f7-icon slot="media" ios="f7:list_bullet" md="material:list_bullet"></f7-icon>
      </f7-list-item>
            <f7-list-item link="/listProjects-manager/" title="Liste des projets" panel-close>
        <f7-icon slot="media" ios="f7:list_bullet" md="material:list_bullet"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/manager-generate/" title="Générer compte rendu (docx)" panel-close>
        <f7-icon slot="media" ios="f7:arrow_down_doc_fill" md="material:file_download"></f7-icon>
      </f7-list-item>
            <!-- <f7-list-item
        external
        :link="linkUser"
        title="Générer compte-rendu (docx)"
        panel-close
      >
        <f7-icon slot="media" ios="f7:arrow_down_doc_fill" md="material:file_download"></f7-icon>
      </f7-list-item>
      <f7-list-item
        external
        :link="linkManaged"
        title="Générer compte-rendu de mes développeurs (docx)"
        panel-close
      >
        <f7-icon slot="media" ios="f7:arrow_down_doc_fill" md="material:file_download"></f7-icon>
      </f7-list-item> -->
    </f7-list>

  </f7-page>
</template>
<script>
export default {
  components: {},
   data: function() {
  //  const currentLoggedIn = localStorage.getItem('currentloggedin');
    return {
  
     };
  },
};
</script>
