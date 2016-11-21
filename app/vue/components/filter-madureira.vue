<style lang="scss">
  .filter {
    width: 100%;
    height: 100%;
    // background-image: url(../images/filter1.png);
    // background-size: 100%;
    &.filter-group-transition {
      transition: opacity .3s ease .4s, transform .3s ease .4s;
      transform: translateY(0px);
      opacity: 1;
    }
    &.filter-group-enter, &.filter-group-leave {
      opacity: 0;
      transform: translateY(50px);
    }
    &.filter-group-leave {
      transition: opacity .1s linear, transform .1s linear ;
    }
  }
</style>

<template>

  <div class="filter">
    <filter-media v-for="m in medias" transition="fade" :media="m" :height="height" :width="width" :playing.sync="playing"></filter-media>
    <div v-if="playing !== null && filter !== ''" style="width: 100%; height: 100%; background: rgba(0,0,0,.7); z-index: 5; position: absolute; left: 0; top: 0;"></div>
  </div>  

</template>

<script>
  var $$$ = require('jquery')
  var marked = require('marked')
  module.exports = {
    props: ['height', 'width', 'naves', 'playing'],
    data: function(){
      return {
        medias: [],
        sizes: [{
          height: 47,
          x: 36.2,
          y: 10.4
        },{
          height: 21,
          x: 24.3,
          y: 35
        },{
          height: 30.8,
          x: 44.4,
          y: 59.8
        },{
          height: 25,
          x: 62.3,
          y: 10.4
        },{
          height: 25,
          x: 62.3,
          y: 10.4
        }]
      }
    },
    watch: {
      
    },
    methods: {
      
    },
    created: function () {
      for (var i = 0; i < this.naves[5].media.length; i++) {
        var med = {
          id: this.naves[5].media[i].id + '-filter',
          card: this.naves[5].media[i].id,
          nav: this.naves[5].media[i].nav,
          width: this.naves[5].media[i].width,
          height: this.sizes[i].height,
          x: this.sizes[i].x,
          y: this.sizes[i].y,
          imgs: [],
          nome: "",
          shadow: this.naves[5].media[i].shadow,
          filter: true,
          video: this.naves[5].media[i].video
        }
        this.medias.push(med)
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