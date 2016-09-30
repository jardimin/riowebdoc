<style lang="scss">
  .scrooll {
    width: 90%;
    position: relative;
    height: 400px;
    margin-top: 10%;
    overflow: hidden;
  }
  .alunos {
    width: 50%;
    float: left;
    position: relative;
  }
  .alunos_img {
    width: 45%;
    float: left;
    position: relative;
    img {
      width: 100%;
      margin-bottom: 15px;
    }
  }
</style>

<template>
  <div>
    <div class="rwd_janela_conteudo">
      <h3>Alunos</h3>
      <div class="scrooll">
        <div class="alunos">
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
        <div class="alunos_img">
          <img src="https://sectrj.files.wordpress.com/2012/10/sebrae3.jpg">
          <img src="http://www.caurj.gov.br/wp-content/uploads/2015/05/1.jpg">
          <img src="https://sectrj.files.wordpress.com/2013/07/naveconhecimento_parquemadureira05.jpg">
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
      $$$('.scrooll').perfectScrollbar({
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