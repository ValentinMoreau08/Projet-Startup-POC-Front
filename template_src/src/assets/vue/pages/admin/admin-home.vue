<template>
  <f7-page>
    <f7-navbar title="Administrateur">
      <f7-nav-right>
        <f7-link class="panel-open" panel-open="#panel-admin" icon="fas fa-bars"></f7-link>
      </f7-nav-right>
   
    </f7-navbar>
    <f7-block-title>Accueil administrateur</f7-block-title>
    <!-- <f7-block inner>
      <p>This is template for Framework75, Vue and Phonegap.</p>
    </f7-block> -->
    <f7-block-title class="searchbar-found">Qu'est-ce que je peux faire ?</f7-block-title>
    <f7-list class="components-list searchbar-found">
      <f7-list-item link="/lists-admin/" title="Liste de tous les utilisateurs" panel-close>
        <f7-icon slot="media" ios="f7:list_bullet" md="material:list_bullet"></f7-icon>
      </f7-list-item>
            <f7-list-item link="/listProjects-admin/" title="Liste des projets" panel-close>
        <f7-icon slot="media" ios="f7:list_bullet" md="material:list_bullet"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/addUser-admin/" title="Ajouter un utilisateur" panel-close>
        <f7-icon slot="media" ios="f7:person_badge_plus_fill" md="material:person_add"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/changeManager-admin/" title="Attribuer un manager" panel-close>
        <f7-icon slot="media" ios="f7:person_2_fill" md="material:person_2_fill"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/changeRole-admin/" title="Changer le rôle d'un utilisateur" panel-close>
        <f7-icon slot="media" ios="f7:repeat" md="material:repeat"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/create-project/" title="Ajouter un projet" panel-close>
        <f7-icon slot="media" ios="f7:text_badge_plus" md="material:note_add"></f7-icon>
      </f7-list-item>
    
    </f7-list>

   
  </f7-page>
</template>
<script>
export default {
  components: {}
};
</script>
