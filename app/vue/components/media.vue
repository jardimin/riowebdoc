<style lang="scss">
  $time: .2s;

  .fade3-transition {
    transition: opacity .3s ease;
    opacity: 1;
  }
  .fade3-enter, .fade3-leave {
    opacity: 0;
  }
  .fade3-leave {
    transition: opacity .1s linear
  }

  .media_card {
    position: absolute; 
    transform-style: preserve-3d; 
    transition: transform .3s, left .2s, top .2s, opacity .4s; 
    perspective: 800px;
    cursor: pointer;
    &:hover {
      z-index: 3 !important;
    }
    &.filter {
      transition: left .5s;
    }
    &.in-trans {
      transition: none;
    }
    &.hover {
      z-index: 2;
      transition: transform .3s, left $time linear, top $time linear;
      .mdl-card {
        transition: box-shadow $time linear, height $time linear, min-height $time linear, width $time linear, transform .5s, padding $time linear;
      }
      .mdl-card__title {
        height: 95%;
        width: 97%;
        transition: opacity .6s, height $time linear, min-height $time linear, width $time linear;
      }
      .front {
        padding: 6px;
      }
      .right-postal {
        height: 75%;
        margin-top: 10%;
        font-size: 60%!important;
        background: white;
      }
      .left-postal {
        font-size: 60%!important;
        line-height: 12px;
      }
    }
    &.playing {
      z-index: 6 !important;
      transition: transform .3s, left $time*2, top $time*2;
      perspective: 500px;
      cursor: default;
      .right-postal {
        height: 75%;
        margin-top: 5%;
        font-size: 80%!important;
      }
      .left-postal {
        font-size: 80%!important;
        line-height: auto;
      }
      .mdl-card__title {
        height: 98%;
        width: 98.8%;
        transition: opacity .6s, height $time*2, min-height $time*2 linear, width $time*2;
        &.player {
          z-index: 5;
          padding: 30px;
          background: white;
        }
      }

      .mdl-card__menu {
        z-index: 6;
        right: 10px;
        top: 4px;
      }
      .front {
        .material-icons {
          color: black;
        }
      }
      .mdl-card {
        transition: box-shadow $time*2, height $time*2, min-height $time*2 linear, width $time*2, transform 1s, padding $time*2;
      }
    }
    &.filtered {
      opacity: 0 !important;
      z-index: -1;
    }
    .front {
      position: absolute; 
      backface-visibility: hidden; 
      transform-style: preserve-3d; 
      padding: 2%;
      .material-icons {
        color: white;
      }
      .mdl-card__menu {
        .material-icons {
          color: rgba(5,33,47,1);
        }
        .mdl-button--icon {
          background: white;
        }
      }
    }
    .mdl-card {
      border-radius: 1px;
      transition: box-shadow .2s, height .2s, width .2s, transform 1s, padding .2s;
    }
    .mdl-card__title {
      height: 93%;
      width: 96%; 
      color: white;
      position: absolute;
      transition: opacity .6s, height .2s, width .2s;
      opacity: 1;
      padding: 0;
    }
    .mdl-card__menu {
      z-index: 3;
    }
    .back {
      transform: rotateY( 180deg ); 
      position: absolute; 
      backface-visibility: hidden; 
      transform-style: preserve-3d; 
    }
    .mdl-button {
      &:hover, &:focus {
        background: transparent;
      }
    }
    .assistido {
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,.5);
      position: absolute;
      z-index: 5;
    }
    .votado {
      .material-icons {
        color: red !important;
      }
    }
  }

 .left-postal{
      width: 60%!important;
      height: 75%!important;
      border-right: 3px solid;
      margin-left: 5%;
      margin-top: 5%;
      padding: 2%;
      position: relative;
      float: left;
    }

  .right-postal{
      width: 25%;
      text-align: center;
      padding: 2%;
      position: relative;
      float: left;
  }

</style>

<template>

  <div :style="[{height: h_offset + local_height+'px'},{'min-height': h_offset + local_height+'px'},{width: w_offset + local_width+'px'},{left: 'calc(' + media.x+'% + ' + x_offset + 'px)'},{top: 'calc(' + media.y+'% + ' + y_offset + 'px)'}]" class="media_card" :class="{filter: filtered}" :id="media.id" @mouseover="mouseOver" @mouseout="mouseOut">
    <div :id="media.id+'-front'" class="demo-card-wide mdl-card mdl-shadow--{{sw}}dp front" style=""  :style="[{height: h_offset + local_height+'px'},{'min-height': h_offset + local_height+'px'},{width: w_offset + local_width+'px'}]">
      <div :id="media.id+'-player'" class="mdl-card__title player"></div>
      <img v-for="img in media.imgs" class="mdl-card__title" :src="img" :style="[{'z-index': media.imgs.length - $index}]" :id="$index+'-img-'+media.id">
      </img>
      <div style="z-index: 3; position: absolute; width: 100%; padding-left: 42%; padding-top: 22%;" v-if="on" transition="fade">
        <a v-if="playing === null" :href="'/#/home/'+media.id" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" style="overflow: visible;" transition="fade3">
          <i v-if="!no_video" class="material-icons" style="font-size: 60px;">play_circle_outline</i>
        </a>
      </div>
      <div class="mdl-card__menu" v-if="on" transition="fade">
        <span v-if="playing !== null">{{votos}}</span>
        <button v-if="playing !== null" :id="media.id+'-voto'" :class="{votado: votado}" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" @click="votar">
          <i class="material-icons">thumb_up</i>
        </button>
        <button v-if="!no_video" :id="media.id+'-desc'" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" @click="flip(media.id)">
          <i class="material-icons">description</i>
        </button>
        <a v-if="playing !== null" href="/#/home" :id="media.id+'-close'" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">clear</i>
        </a>
      </div>
    </div>
    <div :id="media.id+'-back'" class="demo-card-wide mdl-card mdl-shadow--{{sw}}dp back" :style="[{height: h_offset + local_height+'px'},{'min-height': h_offset + local_height+'px'},{width: w_offset + local_width+'px'}]" style="padding: 2%;">
      <div class="mdl-supporting-text" style="color: black; height: 100%; background-size: 94%; background-repeat: no-repeat; background-position-y: 50px;" :style="{'background-image': 'url(images/mapa_'+backgroundMap+'.png)'}">
      		<div class="left-postal" style="color: black;">
              <h4 style="margin: 0;">{{video_title}}</h4>
        			{{video_desc}}
        	</div>

        	<div class="right-postal" style="color: black;">
        			<img src="//capacitacao.navedoconhecimento.org.br/img/logo.png" style="width: 100%; position: absolute; bottom: 0; right: -15px;">
        	</div>
       	
      </div>
      <div class="mdl-card__menu" v-if="on" transition="fade">
        <button :id="media.id+'-photo'" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" @click="unFlip(media.id)">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#000000" d="m 18.334101,19.618585 -12.3872826,0 0,-15.4980258 12.3868306,0 0,15.4978458 4.33e-4,0 0,1.8e-4 z m 2.550122,-16.9687922 0,-0.1558962 C 20.654487,2.4020434 19.961215,1.7086388 19.86959,1.4787215 l -0.155715,0 c -0.161583,0.4028738 -0.554708,0.687946 -1.015536,0.687946 -0.460377,0 -0.853953,-0.2850722 -1.015084,-0.687946 l -1.248884,0 c -0.16068,0.4028738 -0.554709,0.687946 -1.015085,0.687946 -0.460827,0 -0.854404,-0.2850722 -1.015085,-0.687946 l -1.248883,0 c -0.16068,0.4028738 -0.554257,0.687946 -1.015084,0.687946 -0.460377,0 -0.853953,-0.2850722 -1.015085,-0.687946 l -1.2488831,0 c -0.161132,0.4028738 -0.554709,0.687946 -1.0150851,0.687946 -0.4603762,0 -0.8539529,-0.2850722 -1.0150845,-0.687946 l -1.2488837,0 c -0.1611316,0.4028738 -0.5547081,0.687946 -1.0150851,0.687946 -0.4603755,0 -0.8539526,-0.2850722 -1.0150845,-0.687946 l -0.1557152,0 C 4.3192541,1.7086388 3.6259796,2.4020469 3.3962433,2.4938966 l 0,0.1558962 C 3.7988467,2.8109247 4.0841,3.2044554 4.0841,3.6649679 c 0,0.4605113 -0.2852533,0.854223 -0.6878567,1.015175 l 0,1.2487925 C 3.7988467,6.0900673 4.0841,6.4837791 4.0841,6.9441105 c 0,0.4605113 -0.2852533,0.8540432 -0.6878567,1.014994 l 0,1.2486127 C 3.7988467,9.3688942 4.0841,9.7624262 4.0841,10.222937 c 0,0.460692 -0.2852533,0.854179 -0.6878567,1.015355 l 0,1.248433 c 0.4026034,0.16095 0.6878567,0.554663 0.6878567,1.015536 0,0.46015 -0.2852533,0.853682 -0.6878567,1.015175 l 0,1.248612 C 3.7988467,15.927044 4.0841,16.320711 4.0841,16.781223 c 0,0.460512 -0.2852533,0.854043 -0.6878567,1.015355 l 0,1.248613 C 3.7988467,19.206007 4.0841,19.599719 4.0841,20.06023 c 0,0.460513 -0.2852533,0.854043 -0.6878567,1.014995 l 0,0.170159 c 0.2292859,0.09203 0.9230097,0.785438 1.0150845,1.015175 l 0.1557152,0 c 0.1611319,-0.402694 0.554709,-0.687631 1.0150845,-0.687631 0.4608282,0 0.8544049,0.284937 1.0155365,0.687631 l 1.2484323,0 c 0.1611316,-0.402694 0.5547083,-0.687631 1.0155359,-0.687631 0.4603767,0 0.8539527,0.284937 1.0150847,0.687631 l 1.2484321,0 c 0.161132,-0.402694 0.554708,-0.687631 1.015536,-0.687631 0.460376,0 0.853953,0.284937 1.015085,0.687631 l 1.248431,0 c 0.160681,-0.402694 0.554709,-0.687631 1.015536,-0.687631 0.459925,0 0.853503,0.284937 1.014634,0.687631 l 1.249335,0 c 0.16068,-0.402694 0.554256,-0.687631 1.015085,-0.687631 0.460376,0 0.853501,0.284937 1.015084,0.687631 l 0.155715,0 c 0.09162,-0.229557 0.784897,-0.922965 1.015085,-1.015175 l 0,-0.170159 C 20.48162,20.91459 20.196819,20.520562 20.196819,20.06005 c 0,-0.460511 0.284801,-0.854043 0.687856,-1.014994 l 0,-1.248612 c -0.403055,-0.160998 -0.687856,-0.554845 -0.687856,-1.015402 0,-0.460692 0.284801,-0.853998 0.687856,-1.015355 l 0,-1.248612 C 20.48162,14.356304 20.196819,13.962231 20.196819,13.5019 c 0,-0.460693 0.284801,-0.854225 0.687856,-1.015355 l 0,-1.249155 c -0.403055,-0.160952 -0.687856,-0.554664 -0.687856,-1.015175 0,-0.4605108 0.284801,-0.8542238 0.687856,-1.0151748 l 0,-1.2487934 C 20.48162,7.797116 20.196819,7.4035842 20.196819,6.9428918 c 0,-0.4603314 0.284801,-0.8538621 0.687856,-1.0150392 l 0,-1.2487937 C 20.48162,4.518108 20.196819,4.1243963 20.196819,3.663885 20.196385,3.2040944 20.48162,2.8109247 20.884223,2.6497928" /> 
          </svg>
        </button>
        <a v-if="playing !== null" href="/#/home" :id="media.id+'-close'" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">clear</i>
        </a>
      </div>
    </div>
  </div>  

</template>

<script>
  var $$$ = require('jquery')
  var marked = require('marked')
  var _ = require('underscore')
  module.exports = {
    replace: true,
    props: ['media', 'height', 'width', 'playing', 'user'],
    data: function(){
      return {
        filter: '',
        filtered: false,
        local_width: 0,
        local_height: 0,
        x_offset: 0,
        y_offset: 0,
        w_offset: 0,
        h_offset: 0,
        no_video: true,
        w_loop: 0,
        sw: 2,
        video_desc: '',
        video_title: '',
        video_auth: '',
        iframe: null,
        interval: 0,
        img_now: 0,
        button: false,
        hover: false,
        on: false,
        votado: false,
        votos: 0
      }
    },
    computed: {
      backgroundMap: function () {
        if (this.media.nav === 'Penha') {
          return 'penha'
        } else if (this.media.nav === 'Triagem') {
          return 'triagem'
        } else if (this.media.nav === 'Nova Brasília') {
          return 'nova_brasilia'
        } else if (this.media.nav === 'Irajá') {
          return 'iraja'
        } else if (this.media.nav === 'Vila Aliança') {
          return 'vila_alianca'
        } else if (this.media.nav === 'Santa Cruz') {
          return 'santa_cruz'
        } else if (this.media.nav === 'Padre Miguel') {
          return 'padre_miguel'
        } else if (this.media.nav === 'Madureira') {
          return 'madureira'
        }  
      }
    },
    watch: {
      on: function(val, oldVal) {
        if (oldVal === true) {
          this.unFlip(this.media.id)
        } else {
          componentHandler.upgradeDom()
        }
      },
      playing: function(val, oldVal) {
        if (val === this.media.id && !this.filtered) {
          var width = $$$(window).width()
          var loc = this.media.x + this.x_offset + this.w_loop
          var mw = ((this.height*.9)*16)/9
          var heightPX = (this.height*this.media.y)/100
          var leftPX = (this.width*this.media.x)/100
          $$$('#'+this.media.id).addClass('playing')
          this.h_offset = (this.height*.9) - this.local_height
          this.w_offset = mw - this.local_width
          this.y_offset = (this.height*.05) - heightPX
          this.x_offset = (this.width*.27) - leftPX
        } else if (oldVal === this.media.id && !this.filtered) {
          $$$('#'+this.media.id).removeClass('playing')
          $$$('#'+this.media.id).removeClass('hover')
          this.h_offset = 0
          this.w_offset = 0
          this.y_offset = 0
          this.x_offset = 0
          this.hover = false
          this.on = false
          this.sw = this.media.shadow
          this.iframe.destroy()
        }
      },
      filter: function(val, oldVal) {
        if (val !== '' && !this.media.filter) {
          var leftPX = (this.width*this.media.x)/100
          this.filtered = true
          if (leftPX < this.width/2 - 50) {
            this.x_offset = - this.width/2
          } else {
            this.x_offset = this.width/2 + 50
          }
        } else {
          this.filtered = false
          this.x_offset = 0
        }
      }
    },
    methods: {
      attachVotes: function () {
        var ok
        if(this.media.id.split('-')[1] === 'filter') {
          ok = this.media.id.split('-')[0]
        } else {
          ok = this.media.id
        }
        Trello.get("/cards/"+ok+"/actions", (comment) => {
          var votes = []
          for (var i = 0; i < comment.length; i++) {
            if (comment[i].data.text === 'voto') {
              votes.push(comment[i].data.text)
            }
          }
          this.votos = votes.length
        })
      },
      votar: function(event) {
        if (this.votado) {
          console.log('des-votar')
          if (this.media.id.split('-')[1] === 'filter') {
            this.$dispatch('des-votado', this.media.id.split('-')[0])
            document.cookie = "voto-"+this.media.id.split('-')[0]+"=false"
          } else {
            this.$dispatch('des-votado', this.media.id)
            document.cookie = "voto-"+this.media.id+"=false"
          }
          this.votado = false
          this.votos = this.votos - 1
        } else {
          console.log('votar')
          if (this.media.id.split('-')[1] === 'filter') {
            this.$dispatch('votado', this.media.id.split('-')[0])
            document.cookie = "voto-"+this.media.id.split('-')[0]+"=true"
          } else {
            this.$dispatch('votado', this.media.id)
            document.cookie = "voto-"+this.media.id+"=true"
          }
          this.votado = true
          this.votos = this.votos + 1
        }
      },
      flip: function(id) {
        $$$('#'+id+'-front').css('transform', 'rotateY(180deg)')
        $$$('#'+id+'-back').css('transform', 'rotateY(0deg)')
        ga('send', 'event', 'Media', 'flip', id)
      },
      unFlip: function(id) {
        $$$('#'+id+'-back').css('transform', 'rotateY(180deg)')
        $$$('#'+id+'-front').css('transform', 'rotateY(0deg)')
        ga('send', 'event', 'Media', 'unflip', id)
      },
      changeImg: function() {
        if (this.img_now === this.media.imgs.length - 1) {
          for (var i = 0; i < this.img_now; i++) {
            $$$('#'+i+'-img-'+this.media.id).css('opacity', 1)
          }
          this.img_now = 0
        } else {
          $$$('#'+this.img_now+'-img-'+this.media.id).css('opacity', 0)
          this.img_now = this.img_now + 1
        }
      },
      mouseOver: function() {
        if (this.playing === null) {
          this.hover = true
          if (!this.on) {
            // this.w_offset = this.media.width * .05
            // this.h_offset = this.local_height * .05
            // this.x_offset = -this.w_offset/2
            // this.y_offset = -this.h_offset/2
            setTimeout( () => {
              if (this.hover) {
                $$$('#'+this.media.id).addClass('hover')
                if (this.local_width < 480) {
                  this.w_offset = 480 - this.local_width
                  this.h_offset = 270 - this.local_height
                  this.x_offset = -(this.w_offset/2)
                  var heightPX = (this.height*this.media.y)/100
                  var leftPX = (this.width*this.media.x)/100
                  var matrixX = heightPX + this.local_height
                  var matrixY = leftPX + this.local_width
                  if (heightPX - (this.h_offset/2) < 0) {
                    this.y_offset = - heightPX
                  } else if (matrixX + (this.h_offset/2) > this.height) {
                    this.y_offset = - ((matrixX + (this.h_offset)) - this.height)
                  } else {
                    this.y_offset = -(this.h_offset/2) 
                  }
                  if (leftPX - (this.w_offset/2) < 0) {
                    this.x_offset = - leftPX
                  } else if (matrixY + (this.w_offset/2) > this.width) {
                    this.x_offset = - ((matrixY + (this.w_offset)) - this.width)
                  } else {
                    this.x_offset = -(this.w_offset/2) 
                  }
                }                
                this.sw = 8
                this.on = true
              }
            }, 200)
          }
        }
      },
      mouseOut: function(event) {
        var self = this
        var y = event.y || event.clientY
        var x = event.x || event.clientX
        var heightPX = (this.height*this.media.y)/100
        var leftPX = (this.width*this.media.x)/100
        var matrixX = heightPX + this.local_height
        var matrixY = leftPX + this.local_width
        if (this.playing === null) {
          this.hover = false
          if (self.on) {
            if (leftPX +this.x_offset >= x || matrixX-this.x_offset <= x || heightPX+this.y_offset <= y || matrixY+this.y_offset+this.local_height >= y) {
              setTimeout(function() {
                if (!self.hover) {
                  self.w_offset = 0
                  self.h_offset = 0
                  self.x_offset = 0
                  self.y_offset = 0
                  self.sw = self.media.shadow
                  self.on = false
                  $$$('#'+self.media.id).removeClass('hover')
                }
              }, 200)
            }
          } else if (!self.on) {
            this.hover = false
            self.w_offset = 0
            self.h_offset = 0
            self.x_offset = 0
            self.y_offset = 0
            self.sw = self.media.shadow
            $$$('#'+self.media.id).removeClass('hover')
          }
        }
      },
      playThis: function() {
        ga('send', 'event', 'Media', 'play', this.media.id)
        this.attachVotes()
        console.log(this.user)
        if (this.media.id.split('-')[1] === 'filter') {
          this.votado = _.contains(this.user, this.media.id.split('-')[0])
        } else {
          this.votado = _.contains(this.user, this.media.id)
        }
        this.playing = this.media.id
        Trello.get("/cards/"+this.media.card, (card) => {
          this.iframe = new YT.Player(this.media.id+'-player', {
            height: '100%',
            width: '100%',
            videoId: card.desc,
            events: {
              'onReady': this.playVideo,
              'onStateChange': this.videoFim
            }
          })
        })
      },
      closeMedia: function() {
        ga('send', 'event', 'Media', 'close', this.media.id)
        this.playing = null
      },
      playVideo: function(event) {
        event.target.playVideo()
      },
      videoFim: function(event) {
        var self = this
        if (event.data == YT.PlayerState.ENDED) {
          window.location.hash = "/home"
          self.playing = null
          ga('send', 'event', 'Media', 'end', this.media.id)
        }
      }
    },
    created: function () {
      this.interval = parseInt((Math.random() * 10000)+3000)
      this.sw = this.media.shadow

      if (this.media.id.split('-')[1] === 'filter') {
        this.votado = _.contains(this.user, this.media.id.split('-')[0])
      } else {
        this.votado = _.contains(this.user, this.media.id)
      }

      var self = this

      Trello.get("/cards/"+this.media.card+"/attachments", function(attach) {
        if (attach.length === 0) {
          self.media.imgs = ['/img/default_img.png']
        } else {
          for (var i = 0; i < attach.length; i++) {
            self.media.imgs.push(attach[i].url)
          }
        }
      })

      Trello.get("/cards/"+this.media.card, (card) => {
        this.media.video = card.desc
        if (this.media.video !== "__") {
          var playlistUrl = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + this.media.video + '&key=AIzaSyCwNv14d5bNQ4MwaodqT6z45-6A5y4kzus'
          var videoURL= 'https://www.youtube.com/embed/'
          $$$.getJSON(playlistUrl, function(data) {
            // console.log(data)
            $$$.each(data.items, function(i, item) {
              // console.log(item.snippet.description.split("[")[1].split("]")[1])
              self.video_title = item.snippet.title
              self.video_desc = item.snippet.description
            });
          })
          this.no_video = false
        } else {
          this.no_video = true
        }
      })

      this.$on('media-height', function() {
        this.local_height = (this.height*this.media.height)/100
        this.local_width = (this.local_height*16)/9
      })

      if (this.media.filter) {
        this.local_height = (this.height*this.media.height)/100
        this.local_width = (this.local_height*16)/9
      }
      
    },
    attached: function () {
      var self = this
      this.attachVotes()
      console.log(this.user)
      this.votado = _.contains(this.user, this.media.id)

      if(this.votado) {
        console.log('votado '+ this.media.id)
      }
      componentHandler.upgradeDom()

      window.setInterval(function(){
        self.changeImg()
      }, self.interval);

      this.$on('filter', function(nome) {
        if (this.filter === nome || nome === 'none') {
          this.filter = ''
        } else {
          this.filter = nome
        }
      })
      
      if (!this.media.filter && this._uid === this.$parent.media_cloud.length + 2) {
        this.$dispatch('home-ready')
      }
    },
    components: {
      'media': require('./media.vue')
    },
    filters: {
      marked: function(value) {
        return marked(value)
      }
    }
  }
</script>