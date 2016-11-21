<style lang="scss">
  
</style>

<template>

  <div id="media_cloud" class="mdl-grid" style="padding: 0; position: relative; overflow: hidden;" :style="{height: height+'px'}" @wheel="onWheel">
    <div id="cloud_wraper" class="rwd_content mdl-cell mdl-cell--12-col" style="margin: 0; perspective: 800px; height: 100%; position: absolute; overflow: hidden;" :style="{width: width+'px'}">

      <in-media v-for="media in media_cloud" transition="fade" :media="media" :height="height" :width="width" :playing.sync="playing"></in-media>
      <div v-if="filter !== ''" is="filter-madureira" transition="filter-group" :naves="naves" :width="width" :height="height" :playing.sync="playing"></div>
      <div v-if="playing !== null && filter === ''" style="width: 100%; height: 100%; background: rgba(0,0,0,.7); z-index: 5; position: absolute; left: 0; top: 0;"></div>

    </div>  
  </div>  

</template>

<script>
  var $$$ = require('jquery')
  var marked = require('marked')
  var _ = require('underscore')
  var Ps = require('perfect-scrollbar')
  module.exports = {
    replace: true,
    props: ['naves', 'user'],
    data: function(){
      return {
        filter: '',
        media_cloud: [],
        width: 0,
        height: 0,
        playing: null,
        scroll: true
      }
    },
    methods: {
      changeCanvasSize: function () {
        var h = $$$('#navegacao').outerHeight() + $$$('header').outerHeight() + 32 - 15
        var w = $$$(window).height()
        var q = $$$(window).width()
        if (w) {}
        this.height = w-h
        this.width = this.height * 3.301912568306011
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
        if (this.scroll) {
          var delta = event.wheelDelta || -event.deltaY
          var container = document.getElementById('media_cloud')
          if (delta > 0) {
            container.scrollLeft = container.scrollLeft + 60
          } else if (delta < 0 && container.scrollLeft > 0) {
            container.scrollLeft = container.scrollLeft - 60
          }
          Ps.update(container)
        }
      }
    },
    computed: {
      
    },
    created: function () {
      for (var i = 0; i < this.naves.length; i++) {
        for (var o = 0; o < this.naves[i].media.length; o++) {
          var m = this.naves[i].media[o]
          m.card = m.id
          this.media_cloud.push(m)
        }
      }
    },
    attached: function () {
      var self = this
      var q = $$$(window).width()
      var container = document.getElementById('media_cloud')
      componentHandler.upgradeDom()
      this.changeCanvasSize()
      this.$on('filter', function(nome) {
        if (this.filter === nome || nome === 'none') {
          this.filter = ''
          this.scroll = true
          Ps.initialize(document.getElementById('media_cloud', {
            suppressScrollY: true,
            suppressScrollX: false,
            useBothWheelAxes: true
          }))
          setTimeout( () => {
            var n = parseInt((this.width - q)/2)
            container.scrollLeft = n
          }, 100)
        } else {
          var n = parseInt((this.width - q)/2)
          this.filter = nome
          this.scroll = false
          setTimeout( () => {
            var n = parseInt((this.width - q)/2)
            container.scrollLeft = n
            Ps.update(container)
            Ps.destroy(container)
          }, 100)
        }
        return true
      })
      Ps.initialize(document.getElementById('media_cloud', {
        suppressScrollY: true,
        suppressScrollX: false,
        useBothWheelAxes: true
      }))
      this.$on('home-ready', function() {
        Ps.update(container)
        if (this.width > q) {
          setTimeout( () => {
            var n = parseInt((this.width - q)/2)
            container.scrollLeft = n
          }, 500)
        }
        return true
      })
    },
    components: {
      'in-media': require('./media.vue'),
      'filter-madureira': require('./filter-madureira.vue')
    },
    filters: {
      marked: function(value) {
        return marked(value)
      }
    }
  }
</script>