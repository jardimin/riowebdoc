<style lang="scss">
  
</style>

<template>
  <div>
    <div class="rwd_janela_conteudo">
      <h3>Contato</h3>
      <div class="pscroll">
        <img src="//capacitacao.navedoconhecimento.org.br/img/logo.png" style="margin-left: 20%; width: 60%; margin-bottom: 5%; ">
        <p style="text-align: center;">Telefone:<strong>(21) 2976-7389 </strong></p>
        <p style="text-align: center;">E-mail:<strong> navesdoconhecimentorj@gmail.com </strong></p>
      </div>
    </div>
    <div class="rwd_janela_img">
      <img src="../img/icon_contato.png" class="rwd_janela_icon">
    </div>
  </div>
</template>

<script>
  var $$$ = require('jquery')
  var marked = require('marked')
  var perfectScrollbar = require('perfect-scrollbar/jquery')($$$)
  
  module.exports = {
    replace: true,
    props: [],
    data: function(){
      return {
        
      }
    },
    methods: {

    },
    computed: {

    },
    attached: function () {
      $$$('.pscroll').perfectScrollbar({
        suppressScrollX: true
      });

      componentHandler.upgradeDom()
    },
    components: {

    },
    filters: {
      
    }
  }
</script>