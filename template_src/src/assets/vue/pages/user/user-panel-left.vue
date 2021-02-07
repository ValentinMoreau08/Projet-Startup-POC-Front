<template>
  <f7-page>
    <f7-block-title>Développeur</f7-block-title>

    <f7-block-title></f7-block-title>
         <f7-list class="components-list searchbar-found">
      <f7-list-item
        link="/listProjects-user/"
        title="Liste des projets"
        panel-close
      >
        <f7-icon slot="media" ios="f7:info" md="material:info"></f7-icon>
      </f7-list-item>
      <f7-list-item
        title="Générer compte-rendu (docx)"
        v-on:click="generateDoc()"
        panel-close
      >
        <f7-icon slot="media" ios="f7:info" md="material:info"></f7-icon>
      </f7-list-item>
      <f7-list-item
        link="/create-time/"
        title="Saisir mes temps"
        panel-close
      ></f7-list-item>
      <f7-list-item
        link="/times-user/"
        title="Consulter mes temps"
        panel-close
      ></f7-list-item>
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
  }
};
</script>
