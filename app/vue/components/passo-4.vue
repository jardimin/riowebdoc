<style lang="scss">
  
</style>

<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">   
      <h3>Seu postal foi enviado!</h3>
      <p style="text-align: center;">O vídeo do seu postal já deve estar chegando nos e-mails indicados. <br> Confira lá! <br> Você pode voltar quantas vezes quiser ao Meu Rio Vale um Webdoc e enviar outros postais. <br> Valeu!<br></p>
      <br><br>

    </div>
  </div> 
</template>

<script>
  var $$$ = require('jquery')
  var marked = require('marked')
  module.exports = {
    replace: true,
    props: ['webcard'],
    data: function(){
      return {

      }
    },
    methods: {

    },
    computed: {

    },
    attached: function () {
      componentHandler.upgradeDom()
      var self = this
      setTimeout(function() {
        self.$dispatch('fechar-janela')
      }, 10000)
    },
    components: {

    },
    filters: {
      
    }
  }
</script>