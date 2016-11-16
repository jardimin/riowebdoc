<style lang="scss">
  
</style>

<template>

  <div id="media_cloud" class="mdl-grid" style="padding: 0; overflow: hidden; background-image: url(../images/layout_40_janelas_3.png); background-repeat: no-repeat; background-size: 100%; background-position-y: 50px;" >
    <div class="rwd_content mdl-cell mdl-cell--12-col" style="margin: 0; width: 100%; perspective: 800px;">

      <in-media v-for="media in media_cloud" transition="fade" :media="media" :height="height" :width="width" :playing.sync="playing"></in-media>
      <div v-if="playing !== null" style="width: 100%; height: 100%; background: rgba(0,0,0,.7); z-index: 5; position: absolute; left: 0; top: 0;"></div>

    </div>  
  </div>  

</template>

<script>
  var $$$ = require('jquery')
  var marked = require('marked')
  var _ = require('underscore')
  module.exports = {
    replace: true,
    props: ['naves', 'user'],
    data: function(){
      return {
        filter: '',
        media_cloud: [],
        width: 0,
        height: 0,
        playing: null
      }
    },
    methods: {
      changeCanvasSize: function () {
        var h = $$$('#navegacao').outerHeight() + $$$('header').outerHeight() + 32
        var w = $$$(window).height()
        this.width = 500 * this.naves.length
        this.height = w-h
        $$$('#media_cloud').height(w-h)
        setTimeout( () => {
          this.$broadcast('media-height')
        })
      },
      mouseMove: function (event) {
        var width = $$$(window).width()
        var range = d3.scaleLinear()
                      .domain([0, width])
                      .range([0, 2])
        var interval = Math.abs(range(event.clientX) - 1)
      },
      onWheel: function (event) {
        var offset = 25
        var delta = event.wheelDelta || -event.deltaY
      }
    },
    computed: {
      
    },
    created: function () {
      for (var i = 0; i < this.naves.length; i++) {
        console.log(this.naves.length)
        for (var o = 0; o < this.naves[i].media.length; o++) {
          var m = this.naves[i].media[o]
          this.media_cloud.push(m)
        }
      }
    },
    attached: function () {
      var self = this
      componentHandler.upgradeDom()
      this.changeCanvasSize()
      this.$on('filter', function(nome) {
        if (this.filter === nome || nome === 'none') {
          this.filter = ''
        } else {
          this.filter = nome
        }
        return true
      })
    },
    components: {
      'in-media': require('./media.vue')
    },
    filters: {
      marked: function(value) {
        return marked(value)
      }
    }
  }
</script>