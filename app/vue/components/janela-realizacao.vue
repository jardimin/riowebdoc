<style lang="scss">
  
</style>

<template>
  <div>
    <div class="rwd_janela_conteudo">
      <h3>Alunos</h3>
      <div class="pscroll 2">
        <div style="width: 50%; float: left; position: relative;">
          <ul>
            <li>Aluno</li>
            <li>Aluno</li>
            <li>Aluno</li>
            <li>Aluno</li>
            <li>Aluno</li>
            <li>Aluno</li>
            <li>Aluno</li>
            <li>Aluno</li>
            <li>Aluno</li>
            <li>Aluno</li>
            <li>Aluno</li>
          </ul>
        </div>
        <div style="width: 50%; float: left; position: relative;">
          <img style="width: 100%;" src="https://sectrj.files.wordpress.com/2012/10/sebrae3.jpg">
          <img style="width: 100%;" src="http://www.caurj.gov.br/wp-content/uploads/2015/05/1.jpg">
          <img style="width: 100%;" src="https://sectrj.files.wordpress.com/2013/07/naveconhecimento_parquemadureira05.jpg">
        </div>
      </div>
    </div>
    <div class="rwd_janela_img">
      <img src="../img/icon_realizacao.png" class="rwd_janela_icon">
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
      $$$('.2').perfectScrollbar({
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