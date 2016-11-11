(function(){
	var _ = require('underscore')
	var Vue = require('vue')
	var Router = require('director').Router
	var app = new Vue(require('./app.vue'))
	Vue.config.debug = true


	var db = [{
		headers: {
			icon: "novabrasilia",
			id: "579651e8b317db0ef8c59645",
			nome: "Nova Brasília",
			video_cards: [
				"ZZsrowhDpos",
				"0vo_vsW_Uog",
				"ugH9hGwMv4Y",
				"nvUeo5sagkA",
				"vrVuGiKRVDU",
				"7fkOqXAHLKQ"
			]
		},
		media: [{
			id: "57edabd89324758eca7de656",
			nav: "Nova Brasília",
			width: 163,
			height: 30,
			x: 50,
			y: 50,
			imgs: [],
			nome: "",
			shadow: 2,
			video: "tA6qNEEqVJ8"
		}]
	},{
		headers: {
			icon: "iraja",
			id: "57d80ac925e96401c21f7df5",
			nome: "Irajá",
			video_cards: [
				"ZZsrowhDpos",
				"0vo_vsW_Uog",
				"ugH9hGwMv4Y",
				"nvUeo5sagkA",
				"vrVuGiKRVDU",
				"7fkOqXAHLKQ"
			]
		},
		media: [{
			id: "57edabd89324758eca7de656",
			nav: "Irajá",
			width: 163,
			height: 30,
			x: 50,
			y: 50,
			imgs: [],
			nome: "",
			shadow: 2,
			video: "tA6qNEEqVJ8"
		}]
	},{
		headers: {
			icon: "vilaalianca",
			id: "57d80ad87c49e7f7310352f0",
			nome: "Vila Aliança",
			video_cards: [
				"ZZsrowhDpos",
				"0vo_vsW_Uog",
				"ugH9hGwMv4Y",
				"nvUeo5sagkA",
				"vrVuGiKRVDU",
				"7fkOqXAHLKQ"
			]
		},
		media: [{
			id: "57edabd89324758eca7de656",
			nav: "Vila Aliança",
			width: 163,
			height: 30,
			x: 50,
			y: 50,
			imgs: [],
			nome: "",
			shadow: 2,
			video: "tA6qNEEqVJ8"
		}]
	},{
		headers: {
			icon: "santacruz",
			id: "57d80ae89bbc5a6b5e728b52",
			nome: "Santa Cruz",
			video_cards: [
				"ZZsrowhDpos",
				"0vo_vsW_Uog",
				"ugH9hGwMv4Y",
				"nvUeo5sagkA",
				"vrVuGiKRVDU",
				"7fkOqXAHLKQ"
			]
		},
		media: [{
			id: "57edabd89324758eca7de656",
			nav: "Santa Cruz",
			width: 163,
			height: 30,
			x: 50,
			y: 50,
			imgs: [],
			nome: "",
			shadow: 2,
			video: "tA6qNEEqVJ8"
		}]
	},{
		headers: {
			icon: "triagem",
			id: "57d80af0c40622fb9f879f62",
			nome: "Triagem",
			video_cards: [
				"ZZsrowhDpos",
				"0vo_vsW_Uog",
				"ugH9hGwMv4Y",
				"nvUeo5sagkA",
				"vrVuGiKRVDU",
				"7fkOqXAHLKQ"
			]
		},
		media: [{
			id: "57edabd89324758eca7de656",
			nav: "Triagem",
			width: 163,
			height: 30,
			x: 50,
			y: 50,
			imgs: [],
			nome: "",
			shadow: 2,
			video: "tA6qNEEqVJ8"
		}]
	},{
		headers: {
			icon: "padremiguel",
			id: "57d80afe105fef63a6413dd0",
			nome: "Padre Miguel",
			video_cards: [
				"ZZsrowhDpos",
				"0vo_vsW_Uog",
				"ugH9hGwMv4Y",
				"nvUeo5sagkA",
				"vrVuGiKRVDU",
				"7fkOqXAHLKQ"
			]
		},
		media: [{
			id: "57edabd89324758eca7de656",
			nav: "Padre Miguel",
			width: 163,
			height: 30,
			x: 50,
			y: 50,
			imgs: [],
			nome: "",
			shadow: 2,
			video: "tA6qNEEqVJ8"
		}]
	},{
		headers: {
			icon: "penha",
			id: "57d80b0a32668283f86410a7",
			nome: "Penha",
			video_cards: [
				"ZZsrowhDpos",
				"0vo_vsW_Uog",
				"ugH9hGwMv4Y",
				"nvUeo5sagkA",
				"vrVuGiKRVDU",
				"7fkOqXAHLKQ"
			]
		},
		media: [{
			id: "57edabd89324758eca7de656",
			nav: "Penha",
			width: 163,
			height: 30,
			x: 50,
			y: 50,
			imgs: [],
			nome: "",
			shadow: 2,
			video: "tA6qNEEqVJ8"
		}]
	},{
		headers: {
			icon: "madureira",
			id: "57d80b1e816a10d03040029b",
			nome: "Madureira",
			video_cards: [
				"ZZsrowhDpos",
				"0vo_vsW_Uog",
				"ugH9hGwMv4Y",
				"nvUeo5sagkA",
				"vrVuGiKRVDU",
				"7fkOqXAHLKQ"
			]
		},
		media: [{
			id: "57edabd89324758eca7de656",
			nav: "Madureira",
			width: 163,
			height: 30,
			x: 50,
			y: 50,
			imgs: [],
			nome: "",
			shadow: 2,
			video: "tA6qNEEqVJ8"
		}]
	}]

	// ROUTES

	var routes = {
		'/home' : {
			on: function () {
				app.$data.className = 'is-home'
				ga('send', 'pageview', '/home')
				Vue.nextTick(function () {
					app.$data.view = 'home-view'
				})
			},
			'/janela/:id': {
				on: function (id) {
					var exec = function() {
						if (id === 'card') {
							app.$refs.view.janela = 'janela-card'
							ga('send', 'pageview', '/create-card')
						} else if (id === 'projeto') {
							app.$refs.view.janela = 'janela-projeto'
							ga('send', 'pageview', '/projeto')
						} else if (id === 'realizacao') {
							app.$refs.view.janela = 'janela-realizacao'
							ga('send', 'pageview', '/alunos')
						} else if (id === 'contato') {
							app.$refs.view.janela = 'janela-contato'
							ga('send', 'pageview', '/contato')
						} else if (id ==='equipe') {
							app.$refs.view.janela = 'janela-equipe'
							ga('send', 'pageview', '/equipe')
						} else {
							router.notfound()
						}
					}
					if (app.$refs.view) {
						exec()
					} else {
						app.$once('home-ready', function() {
							exec()
						})
					}
				},
				after: function (id) {
					app.$refs.view.janela = null
				}
			},
			'/:id': {
				on: function (id) {
					var exec = function() {
						var teste = _.findIndex(app.$refs.view.$children[0].$children, function(i) {
							return i.media.id === id
						})
						if (teste === -1) {
							router.notfound()
						} else {
							app.$refs.view.$children[0].$children[teste].hover = true
							app.$refs.view.$children[0].$children[teste].on = true
							app.$refs.view.$children[0].$children[teste].playThis()
							ga('send', 'pageview', '/media/'+id)
						}
					}
					if (app.$refs.view) {
						exec()
					} else {
						app.$once('home-ready', function() {
							exec()
						})
					}
				},
				after: function (id) {
					app.$refs.view.$children[0].playing = null
				}
			}
		},
		'/webcard/:id': {
			on: function (id) {
				var ids = []
				for (var i = 0; i < app.$data.webcards.length; i++) {
					ids.push(app.$data.webcards[i].id)
				}
				// console.log(ids)
				var validation = _.indexOf(ids, id)

				var self = this

				if (validation !== -1) {

					app.$data.view = ''

					Vue.nextTick(function () {
						// console.log('video-view')
						ga('send', 'pageview', '/webcard/'+id)
						app.$data.view = 'card-view'
						app.$data.className = 'is-card'
						app.$data.card = app.$data.webcards[validation]
					})

				} else if(validation === -1){
					console.log('not-found')
					router.notfound()
				}
				
			}
		}
	}
	var getData = function (desc) {
		return JSON.parse(desc)
	}
	var getHeaders = function (hip) {
		var head_card = _.findWhere(hip, { "name": "headers" })
		var headers = getData(head_card.desc)
		return headers
	}
	var getMedia = function (n, medias, headers, nn, naves) {
		var media = getData(medias[n].desc)
		media.id = medias[n].id
		media.nome = medias[n].name
		if (headers.nome === undefined) {
			app.$data.status = 'Carregando vídeos da Nave ' + headers.headers.nome + ': ' + (n+1) + ' de ' + medias.length + ' vídeos'
		} else {
			app.$data.status = 'Carregando vídeos da Nave ' + headers.nome + ': ' + (n+1) + ' de ' + medias.length + ' vídeos'
		}
		attachVotes(n, media, medias, headers, nn, naves)
	}
	var attachVotes = function (n, media, medias, headers, nn, naves) {
		Trello.get("/cards/"+media.id+"/actions", function(comment) {
			var votes = []
			for (var i = 0; i < comment.length; i++) {
				votes.push(comment[i].data.text)
			}
			media.votes = votes
			media.labels = medias[n].labels.length
			attachImages(n, media, medias, headers, nn, naves)
		})
	}
	var attachImages = function (n, media, medias, headers, nn, naves) {
		Trello.get("/cards/"+media.id+"/attachments", function(attach) {
			if (n===0) {
				var nave = {
					headers: headers,
					media: []
				}
			} else {
				var nave = headers
			}
			var imgs = []
			if (attach.length === 0) {
				media.imgs = ['/img/default_img.png']
			} else {
				for (var i = 0; i < attach.length; i++) {
					imgs.push(attach[i].url)
				}
				media.imgs = imgs
			}
			nave.media.push(media)
			// console.log(n)
			if (n === medias.length - 1) {
				app.$data.naves.push(nave)
				if (nn < naves.length-1) {
					getNaves(nn+1, naves)
				}
			} else if (n < medias.length-1) {
				getMedia(n+1, medias, nave, nn, naves)
			}

			if (n === medias.length - 1 && nn === 7) {
				app.$data.status = 'Pronto!'
				init()
			}
		})
	}
	var getHiper = function (board) {
		Trello.get("/boards/"+board+"/lists", function(hipervideos) {
			var naves = _.filter(hipervideos, function(obj) {
				return obj.name !== 'Webcards'
			})
			var webcards = _.filter(hipervideos, function(obj) {
				return obj.name === 'Webcards'
			})
			// console.log(naves)
			// console.log(webcards)
			getNaves(0, naves)
			getWebcards(webcards)
		})
	}
	var getNaves = function (n, naves) {
		app.$data.naves = db
		init()
		// Trello.get("/lists/"+naves[n].id+"/cards", function(hip) {
		// 	var headers = getHeaders(hip)
		// 	headers.nome = naves[n].name
		// 	headers.id = naves[n].id
		// 	var medias = _.filter(hip, function(obj) {
		// 		return obj.name !== 'headers'
		// 	})
		// 	app.$data.status = 'Carregando vídeos da Nave ' + headers.nome + ': 0 de ' + medias.length + ' vídeos'

		// 	getMedia(0, medias, headers, n, naves)
			
		// })
	}
	var getWebcards = function (webcards) {
		Trello.get("/lists/"+webcards[0].id+"/cards", function(hip) {
			for (var i = 0; i < hip.length; i++) {
				var card = getData(hip[i].desc)
				card.id = hip[i].id
				app.$data.webcards.push(card)
			}
		})
	}

	getHiper('WNJjzEpj')

	var router = new Router(routes)

	// init()
	// ROUTER INIT
	
	function init(){
		console.log("init")
		router 
			.configure({
				recurse: 'forward',
				notfound: function () {
					router.setRoute('/home')
				}
			})
			.init('/')
	}

})()
