<template>
  <f7-page>
    <f7-navbar title="Générer compte rendu" back>
    </f7-navbar>
    <f7-list>
      <f7-list-item
        external
        :link="linkSimple"
        title="Générer compte-rendu (docx)"
        panel-close
      >
        <f7-icon slot="media" ios="f7:arrow_down_doc_fill" md="material:file_download"></f7-icon>
      </f7-list-item>
          <f7-list-item title=" "></f7-list-item>

            <f7-list-item>

              <f7-button  sheet-open=".demo-sheet">Générer compte rendu mensuel</f7-button>
        </f7-list-item>

        <f7-button data-force="true" class="back"> Retour </f7-button>
        
      
      </f7-list>
        <f7-sheet class="demo-sheet" :opened="sheetOpened" @sheet:closed="sheetOpened = false">
    <f7-toolbar>
      <div class="left block-title"> Choisissez le mois et l'année</div>
      <div class="right">
        <f7-link sheet-close>Fermer</f7-link>
      </div>
    </f7-toolbar>
    <f7-page-content>
        <f7-list><f7-list-input
    label="Mois"
    type="select"
    @input="month = $event.target.value"
    v-model="month"
     required validate
    >

    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <option value="0">Janvier</option>
    <option value="1">Février</option>
    <option value="2">Mars</option>
    <option value="3">Avril</option>
    <option value="4">Mai</option>
    <option value="5">Juin</option>
    <option value="6">Juillet</option>
    <option value="7">Août</option>
    <option value="8">Septembre</option>
    <option value="9">Octobre</option>
    <option value="10">Novembre</option>
    <option value="11">Décembre</option>
  </f7-list-input>
  <f7-list-input
    label="Année"
    type="select"
    @input="year = $event.target.value"
    v-model="year"
     required validate
    >
      <option v-for="year in years" :key="year" :value="year">{{ year }}</option>

    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
  </f7-list-input>
  </f7-list>
<f7-list>  
      <f7-list-item
      
        external
        :link="'http://localhost:8180/users/month/'+user+'/'+month+'/'+year+'/exportDoc'"
        panel-close       sheet-close
      >
        <f7-icon slot="media" ios="f7:arrow_down_doc_fill" md="material:file_download"></f7-icon>
      </f7-list-item></f7-list>

    </f7-page-content>

  </f7-sheet>
      
  

  </f7-page>
</template>
<script>

export default  {
    computed : {
    years () {
      const year = new Date().getFullYear()
      return Array.from({length: year - 2000}, (value, index) => 2001 + index)
    }
    },
      methods: {
        exportMonthDoc: function(){

       
              },
              
        
        getUser: function(id)
        {      
             const self = this;
             const app = self.$f7;
            const router = self.$f7router;
            router.back(`/admin-userDetails/${id}/`, {
              ignoreCache: true,
              force: true,
              context: {}
            });
        },
        addManager: function(id)
        {

        },
        back(){
                   
      router.back(`/admin-home/`, {
                ignoreCache: true,
                force: true,
                context: {}
              });
        }
    },
    data: function () {
       ////
       var currentLoggedIn = localStorage.getItem('currentloggedin');
      var linkExportMonthly = "http://localhost:8180"+"/users/month/"+currentLoggedIn;
      var linkExport = "http://localhost:8180"+"/users/"+currentLoggedIn+"/exportDoc";
      return {
        linkUser: linkExportMonthly,
        linkSimple: linkExport,
        user: currentLoggedIn,
        month: 0,
        year: 2020,
        sheetOpened: false,
        

      };
      
    }
  };
</script>
