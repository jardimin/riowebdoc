<style lang="scss">
  #content {
    &.card {
      position: relative;
      background-color: white;
      box-sizing: border-box;
      background-image: url(img/fundo_postal.png);
      padding: 2%;
      .postal_topo {
        height: 15%;
        .logo_postal {
          float: right;
          width: 13%;
        }
        .logo_nave_postal {
          float: left;
          width: 10%;
        }
      }
      .postal_titulo {
        p {
          font-family: 'treta';
          font-size: 20px;
          margin-top: 16px;
          color: #06303c;
        }
        strong {
          color: #00aeab;
          font-weight: 100;
        }
      }
      .postal_content {
        .player_container {
          width: 70%;
          float: left;
          margin-right: 2%;
          height: 480px;
        }
        .menssagem {
          float: left;
          width: 23%;
          box-sizing: border-box;
          padding: 10% 2%;
          background-image: url(img/fundo_menssagem.png);
          height: 480px;
          background-size: contain;
          p {
            font-size: 20px;
            text-align: right;
          }
        }
      }
    }
  }

</style>

<template>
  <div class=" mdl-layout mdl-js-layout mdl-layout--fixed-header" >

   
    <main class="mdl-layout__content" >
    
      <div id="content" class="card" :style="{height: height+'px'}"> 
        <div class="postal_topo">
          <img src="http://meuriovaleumfilme.com.br/imagens/logo_nave.png" class="logo_nave_postal">
          <img src="images/logo.png" class="logo_postal">
        </div>
        <div class="postal_titulo">
          <p>{{card.email_criador}} <strong>enviou este postal de </strong>{{card.nave_nome}} <strong>para</strong> {{card.email_enviado}}</p>
        </div>
        <div class="postal_content">
          <div class="player_container">
            <div id="player"></div> 
          </div>
          <div class="menssagem">
            <p>{{card.menssagem}}</p>
          </div>
        </div>

      </div>
    
    </main>

  </div>
</template>

<script>
  var $$$ = require('jquery')
  var marked = require('marked')
  module.exports = {
    replace: true,
    props: ['card', 'naves', 'user'],
    data: function(){
      return {
        height: 0,
        iframe: null,
        index: 0,
        done: true
      }
    },
    methods: {
      playThis: function() {
        this.iframe = new YT.Player('player', {
          height: '100%',
          width: '100%',
          videoId: this.card.videos[this.index],
          playerVars: {
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            startSeconds: 35,
            endSeconds: 45
          },
          events: {
            'onReady': this.playVideo,
            'onStateChange': this.videoFim
          }
        })
      },
      playVideo: function(event) {
        event.target.playVideo()
      },
      loadVideo: function(event) {
        this.done = true
        if (this.index === 2) {
          window.location.hash = '#/home'
        } else {
          this.index = this.index + 1
        }
        this.iframe.loadVideoById({
          videoId: this.card.videos[this.index]
        })
      },
      videoFim: function(event) {
        var self = this
        if (event.data == YT.PlayerState.PLAYING && this.done) {
          this.done = false
        } else if (event.data == YT.PlayerState.ENDED) {
          this.loadVideo()
        }
      },
    },
    computed: {

    },
    attached: function () {
      this.height = $$$(window).height()
      this.playThis()
    },
    beforeDestroy: function () {
      this.iframe.destroy()
    },
    components: {
      
    },
    filters: {
      
    }
  }
</script>