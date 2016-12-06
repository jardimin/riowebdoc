<style lang="scss">
  
</style>

<template>

  <div id="media_cloud" class="mdl-grid" style="padding: 0; position: relative; overflow: hidden;" :style="{height: height+'px'}" @wheel="onWheel">
    <div id="cloud_wraper" class="rwd_content mdl-cell mdl-cell--12-col" style="margin: 0; perspective: 1600px; height: 100%; position: absolute; overflow: hidden;" :style="{width: width+'px'}">

      <in-media v-for="media in media_cloud" transition="fade" :media.sync="media" :height="height" :width="width" :playing.sync="playing" :user="user"></in-media>
      <div v-if="filter !== '' && !filter_trans" is="filter-madureira" transition="filter-group" :naves="naves" :width="width" :height="height" :playing.sync="playing" :filter="filter" :user="user"></div>
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
        filter_trans: false,
        media_cloud: [],
        width: 0,
        height: 0,
        playing: null,
        container: null,
        scroll: true,
        default_offset: 0
      }
    },
    watch: {
      playing: function (val, oldVal) {
        if (val !== null) {
          this.scroll = false
          this.container.scrollLeft = this.default_offset
          Ps.update(this.container)
        } else {
          this.scroll = true
        }
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
          if (delta > 0) {
            this.container.scrollLeft = this.container.scrollLeft + 60
          } else if (delta < 0 && this.container.scrollLeft > 0) {
            this.container.scrollLeft = this.container.scrollLeft - 60
          }
          Ps.update(this.container)
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
      this.container = document.getElementById('media_cloud')
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
            this.container.scrollLeft = this.default_offset
          }, 100)
        } else if (this.filter !== '' && this.filter !== nome) {
          this.filter_trans = true
          setTimeout( () => {
            this.filter = nome
            this.filter_trans = false
          }, 200)
        } else {
          this.filter = nome
          this.scroll = false
          setTimeout( () => {
            this.container.scrollLeft = this.default_offset
            Ps.update(this.container)
            Ps.destroy(this.container)
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
        Ps.update(this.container)
        if (this.width > q) {
          setTimeout( () => {
            this.default_offset = parseInt((this.width - q)/2)
            this.container.scrollLeft = this.default_offset
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