<style lang="scss">
  .mdl-textfield__label, .mdl-textfield__input{
    padding-left: 7px;
  }
</style>

<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">   
      <h3>Passo 3</h3>
      <p>Seu postal audiovisual está quase pronto! <br> Agora escreva uma mensagem para a pessoa que irá recebê-lo e clique novamente na seta azul.</p>

      <!-- Floating Multiline Textfield -->
      <form action="#" class="rwd_p2">
        <div class="mdl-textfield mdl-js-textfield rwd_txtmsg">
          <textarea class="mdl-textfield__input  mdl-shadow--3dp" type="text" rows="10" id="rwd_msg" v-model="text" @keydown="sendToWebcard"></textarea>
          <label class="mdl-textfield__label" for="rwd_msg">digite aqui sua mensagem</label>
        </div>
      </form>
      <p><strong>{{text.length}}</strong> / 230</p>

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
        text: this.webcard.menssagem
      }
    },
    methods: {
      sendToWebcard: function () {
        if (this.text.length > 229) {
          this.text = this.text.slice(0,-1)
        } else {
          this.webcard.menssagem = this.text
        }
      }
    },
    computed: {

    },
    attached: function () {
      componentHandler.upgradeDom()
    },
    components: {

    },
    filters: {
      
    }
  }
</script>