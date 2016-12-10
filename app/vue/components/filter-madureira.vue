<style lang="scss">
  .filter {
    width: 100%;
    height: 100%;
    /*background-image: url(../images/filter1.png);
    background-size: 100%;*/
    &.filter-group-transition {
      transition: opacity .3s ease .4s, transform .3s ease .4s;
      transform: translateY(0%);
      opacity: 1;
    }
    &.filter-group-enter, &.filter-group-leave {
      opacity: 1;
      transform: translateY(100%);
    }
    &.filter-group-leave {
      transition: opacity .1s linear, transform .1s linear ;
    }
  }
</style>

<template>

  <div class="filter">
    <filter-media v-for="m in medias" transition="fade" :media.sync="m" :height="height" :width="width" :playing.sync="playing"></filter-media>
    <div v-if="playing !== null && filter !== ''" style="width: 100%; height: 100%; background: rgba(0,0,0,.7); z-index: 5; position: absolute; left: 0; top: 0;"></div>
  </div>  

</template>

<script>
  var $$$ = require('jquery')
  var marked = require('marked')
  var _ = require('underscore')

  module.exports = {
    props: ['height', 'width', 'naves', 'playing', 'filter'],
    data: function(){
      return {
        medias: [],
        sizes: [{
          height: 39.8,
          x: 37.5,
          y: 31.2
        },{
          height: 26.4,
          x: 22.3,
          y: 31.5
        },{
          height: 21.2,
          x: 48.4,
          y: 72.7
        },{
          height: 26.7,
          x: 59.6,
          y: 44.4
        },{
          height: 22.5,
          x: 37.4,
          y: 7.3
        }]
      }
    },
    watch: {
      
    },
    methods: {
      
    },
    created: function () {
      for (var i = 0; i < this.naves.length; i++) {
        if (this.naves[i].headers.nome === this.filter) {
          for (var o = 0; o < this.naves[i].media.length; o++) {
            var med = {
              id: this.naves[i].media[o].id + '-filter',
              card: this.naves[i].media[o].id,
              nav: this.naves[i].media[o].nav,
              width: this.naves[i].media[o].width,
              height: this.sizes[o].height,
              x: this.sizes[o].x,
              y: this.sizes[o].y,
              imgs: [],
              nome: "",
              shadow: this.naves[i].media[o].shadow,
              filter: true,
              video: this.naves[i].media[o].video
            }
            this.medias.push(med)
          }
        }
      }
      
    },
    attached: function () {
      
    },
    components: {
      'filter-media': require('./media.vue')
    },
    filters: {
      marked: function(value) {
        return marked(value)
      }
    }
  }
</script>