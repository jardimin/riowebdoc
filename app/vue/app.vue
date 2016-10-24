<style lang="scss">
	.loading {
		position: fixed;
		width: 100%;
		height: 100%;
		p {
			text-align: center;
	    margin-bottom: 0;
	    margin-top: 10px;
	    font-size: 10px;
		}
		img {
			margin-top: 15%;
    	margin-left: 43%;
    	@media screen and (min-width: 1600px) {
        margin-left: 45%;
      }
		}
		#p3 {
			margin: 0px auto;
    	width: 60px;
    	.auxbar {
    		background: #06303c;
    	}
		}
	}
</style>

<template>

	<div>
		<div class="loading" transition="fade" v-if="view === ''">
			<img src="images/logo.png" class="logoimg">
			<p>{{status}}</p>
			<div id="p3" class="mdl-progress mdl-js-progress"></div>
		</div>
		<main class="" :is="view" transition="fade" :class="[className]" :card="card" :naves="naves" :user.sync="user" v-ref:view ></main>
	</div>
	
</template>

<script>
	var _ = require('underscore')
	var md5 = require('blueimp-md5')
	var $$$ = require('jquery')
  var perfectScrollbar = require('perfect-scrollbar')

	module.exports = {
		el: '#app',
		data: {
			card: null,
			className: '',
			webcards: [],
			naves: [],
			view: '',
			status: 'Carregando vídeos.'
		},
		watch : {
			
		},
		computed: {
      
		},
		methods: {
      
		},
		created: function() {

		},
		attached: function() {
			document.querySelector('#p3').addEventListener('mdl-componentupgraded', function() {
		    this.MaterialProgress.setBuffer(0);
		  });
		},
		components: {
			'home-view': require('./views/home-view.vue'),
			'card-view': require('./views/card-view.vue')
		}
	}

</script>