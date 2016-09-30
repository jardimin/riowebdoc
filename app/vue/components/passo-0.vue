<style lang="scss">
  .video-card {
    &.nav {
      width: 15%;
    }
  }
</style>

<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">   
      <h3>Passo 1</h3>
      <p>Quer enviar um postal audiovisual por e-mail? <br> Escolha o local clicando em uma das imagens abaixo. Depois clique na seta azul, no canto superior direito, e monte o vídeo do seu postal.</p>

      <div v-for="nave in naves" class="video-card nav" @click="escolherNave($index)" :id="nave.headers.id+'-nav'" :class="{escolhido: escolhido[$index]}" class="nav-ico"> <img :src="'img/selo_'+nave.headers.icon+'.png'"> </div>

    </div>
  </div>
</template>

<script>
  var $$$ = require('jquery')
  var marked = require('marked')
  module.exports = {
    replace: true,
    props: ['webcard', 'naves', 'ok'],
    data: function(){
      return {
        
      }
    },
    methods: {
      escolherNave: function(index) {
        $$$('.video-card').removeClass('escolhido')
        this.webcard.nave_videos = this.naves[index].headers.video_cards
        this.webcard.nave_nome = this.naves[index].headers.nome
        $$$('#'+this.naves[index].headers.id+'-nav').addClass('escolhido')
      }
    },
    computed: {
      escolhido: function() {
        var list = []
        for (var i = 0; i < this.naves.length; i++) {
          list.push(this.naves[i].headers.nome === this.webcard.nave_nome)
        }
        return list
      }
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