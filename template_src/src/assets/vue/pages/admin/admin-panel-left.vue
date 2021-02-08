<template>
  <f7-page>
    <f7-block-title>Administrateur</f7-block-title>

    <f7-block-title></f7-block-title>
      <f7-list class="components-list searchbar-found">
      <f7-list-item link="/lists-admin/" title="Les utilisateurs" panel-close>
        <f7-icon slot="media" ios="f7:info" md="material:info"></f7-icon>
      </f7-list-item>
            <f7-list-item link="/listProjects-admin/" title="Les projets" panel-close>
        <f7-icon slot="media" ios="f7:info" md="material:info"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/addUser-admin/" title="Ajouter utilisateur" panel-close>
        <f7-icon slot="media" ios="f7:info" md="material:info"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/changeManager-admin/" title="Changer manager" panel-close>
        <f7-icon slot="media" ios="f7:info" md="material:info"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/changeRole-admin/" title="Changer rôle" panel-close>
        <f7-icon slot="media" ios="f7:info" md="material:info"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/create-project/" title="Ajouter projet" panel-close>
        <f7-icon slot="media" ios="f7:info" md="material:info"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/" title="Déconnexion" @click.native="logout()" panel-close>
        <f7-icon slot="media" ios="f7:square_arrow_left" md="material:power_settings_new"></f7-icon>
      </f7-list-item>
    </f7-list>
   <f7-button fill color="black" @click.native="setLayoutTheme('dark')">Mode sombre</f7-button>
  </f7-page>
</template>
<script>
export default {
  components: {},
    methods: {
          setLayoutTheme(theme) {
        const self = this;
        const app = self.$f7;
        app.root.removeClass('theme-dark theme-light').addClass(`theme-${theme}`);
        const currentColorClass = app.root[0].className.match(/color-theme-([a-z]*)/);
        if (currentColorClass) app.root.removeClass(currentColorClass[0]);
        app.root.addClass(`color-theme-white`);
      },

      logout() {
        localStorage.removeItem("currentloggedin");
      }
  }
};
</script>
