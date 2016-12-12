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
			id: "PvJRh5Os",
			card: "",
			nav: "Nova Brasília",
			width: 163,
			height: 26.8,
			x: 17.9,
			y: 18.8,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "tA6qNEEqVJ8"
		},{
			id: "8JDQXM55",
			card: "",
			nav: "Nova Brasília",
			width: 163,
			height: 18.8,
			x: 0,
			y: 28,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "ZZsrowhDpos"
		},{
			id: "tIXdbrvt",
			card: "",
			nav: "Nova Brasília",
			width: 163,
			height: 11.7,
			x: 3.9,
			y: 15.2,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "CE4jIVzF1x8"
		},{
			id: "Qb4ST5US",
			card: "",
			nav: "Nova Brasília",
			width: 163,
			height: 11.7,
			x: 15.1,
			y: 85.9,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "0-p3qLpuDHA"
		},{
			id: "JcU37Nji",
			card: "",
			nav: "Nova Brasília",
			width: 163,
			height: 11.7,
			x: 48.2,
			y: 43.7,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "3E7l46x8B_8"
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
			id: "QYeNE19X",
			card: "",
			nav: "Irajá",
			width: 163,
			height: 26.8,
			x: 33.1,
			y: 0,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "6zQ9sGxy",
			card: "",
			nav: "Irajá",
			width: 163,
			height: 18.8,
			x: 0,
			y: 48,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "BfPwOiUwy_c"
		},{
			id: "Mdu0Ayb1",
			card: "",
			nav: "Irajá",
			width: 163,
			height: 11.7,
			x: 59.3,
			y: 8.5,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "nvf3ubD14wg"
		},{
			id: "20yW1Ulq",
			card: "",
			nav: "Irajá",
			width: 163,
			height: 12.6,
			x: 59.7,
			y: 72,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "4KXPKom0H04"
		},{
			id: "YMnXu79o",
			card: "",
			nav: "Irajá",
			width: 163,
			height: 12.6,
			x: 59.7,
			y: 85.7,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "5dZDU0VBuc"
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
			id: "nAEiPTDb",
			card: "",
			nav: "Vila Aliança",
			width: 163,
			height: 26.8,
			x: 33.1,
			y: 43.5,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "CKjnz3R5GVc"
		},{
			id: "ylh9tKOw",
			card: "",
			nav: "Vila Aliança",
			width: 163,
			height: 12.6,
			x: 70.3,
			y: 43.7,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "U4eREF3kt4E"
		},{
			id: "FTZMj4JN",
			card: "",
			nav: "Vila Aliança",
			width: 163,
			height: 12.6,
			x: 78,
			y: 43.7,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "Tz8z3_FYb8I"
		},{
			id: "G80W2jx3",
			card: "",
			nav: "Vila Aliança",
			width: 163,
			height: 12.6,
			x: 78,
			y: 57.7,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "qlgafW6q9hQ"
		},{
			id: "y5U64LKz",
			card: "",
			nav: "Vila Aliança",
			width: 163,
			height: 12.6,
			x: 70.3,
			y: 57.7,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "kDaS52LAW3Q"
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
			id: "qKd7VavX",
			card: "",
			nav: "Santa Cruz",
			width: 163,
			height: 26.8,
			x: 33.1,
			y: 72,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "IoH9bqxZgmo"
		},{
			id: "zE47M2zC",
			card: "",
			nav: "Santa Cruz",
			width: 163,
			height: 15.8,
			x: 3.6,
			y: 68.4,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "cRMdMEXX",
			card: "",
			nav: "Santa Cruz",
			width: 163,
			height: 12.6,
			x: 89.7,
			y: 71.7,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "kEv84e6b3kE"
		},{
			id: "jyOJM82k",
			card: "",
			nav: "Santa Cruz",
			width: 163,
			height: 12.6,
			x: 82.3,
			y: 85.7,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "KJF94XfzUy4"
		},{
			id: "L0eXVwTJ",
			card: "",
			nav: "Santa Cruz",
			width: 163,
			height: 11.7,
			x: 48.2,
			y: 58.7,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "QAYmjmijdx0"
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
			id: "dq3W9PLm",
			card: "",
			nav: "Triagem",
			width: 163,
			height: 26.8,
			x: 55.1,
			y: 43.7,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "LFwjIJE5EJ0"
		},{
			id: "RSl0E8ne",
			card: "",
			nav: "Triagem",
			width: 163,
			height: 12.6,
			x: 10.7,
			y: 19,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "oZJjgtDv",
			card: "",
			nav: "Triagem",
			width: 163,
			height: 12.6,
			x: 82.3,
			y: 71.7,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "pJ_IKD564FA"
		},{
			id: "JwBVdfA9",
			card: "",
			nav: "Triagem",
			width: 163,
			height: 19.5,
			x: 21.9,
			y: 47.6,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "oR7Ti69P",
			card: "",
			nav: "Triagem",
			width: 163,
			height: 19.5,
			x: 21.9,
			y: 68.9,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
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
			id: "F95YdlzK",
			card: "",
			nav: "Padre Miguel",
			width: 163,
			height: 26.8,
			x: 67.2,
			y: 72,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "2STG1n9VKZE"
		},{
			id: "LRGOcTD2",
			card: "",
			nav: "Padre Miguel",
			width: 163,
			height: 12.6,
			x: 10.7,
			y: 33.2,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "Sefcdo4I",
			card: "",
			nav: "Padre Miguel",
			width: 163,
			height: 13,
			x: 33.1,
			y: 28.6,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "df3GdByA",
			card: "",
			nav: "Padre Miguel",
			width: 163,
			height: 13,
			x: 40.7,
			y: 28.6,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "m0dG2xXu",
			card: "",
			nav: "Padre Miguel",
			width: 163,
			height: 19.5,
			x: 10.7,
			y: 47.6,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
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
			id: "TSQydmpg",
			card: "",
			nav: "Penha",
			width: 163,
			height: 26.8,
			x: 70.3,
			y: 15,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "aFJz9tUi",
			card: "",
			nav: "Penha",
			width: 163,
			height: 19.5,
			x: 48.3,
			y: 0,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "ygvo7j0H",
			card: "",
			nav: "Penha",
			width: 163,
			height: 19.5,
			x: 48.3,
			y: 22.4,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "lXZZCYMb",
			card: "",
			nav: "Penha",
			width: 163,
			height: 19.5,
			x: 59.2,
			y: 22.4,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "pc5IIzOG",
			card: "",
			nav: "Penha",
			width: 163,
			height: 17,
			x: 85.3,
			y: 6.8,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "w6apAHcKZBk"
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
			id: "DgDUHmnA",
			card: "",
			nav: "Madureira",
			width: 163,
			height: 26.8,
			x: 85.3,
			y: 43.7,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "jkqUiVdX",
			card: "",
			nav: "Madureira",
			width: 163,
			height: 15.7,
			x: 12.7,
			y: 68.4,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "ecfgfA61",
			card: "",
			nav: "Madureira",
			width: 163,
			height: 16.5,
			x: 23.7,
			y: 0,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
		},{
			id: "J3SwAuLX",
			card: "",
			nav: "Madureira",
			width: 163,
			height: 17,
			x: 85.3,
			y: 25,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "kbvVwOv0oFY"
		},{
			id: "EFi2kV8d",
			card: "",
			nav: "Madureira",
			width: 163,
			height: 19.5,
			x: 48.3,
			y: 72,
			imgs: [],
			nome: "",
			shadow: 2,
			filter: false,
			video: "__"
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
						var filter = id.split('-')[1]
						if (filter === undefined) {
							var teste = _.findIndex(app.$refs.view.$children[0].$children, function(i) {
								return i.media.id === id
							})
						} else if (filter === 'filter') {
							var teste = _.findIndex(app.$refs.view.$children[0].$children[40].$children, function(i) {
								return i.media.id === id
							})
						}
						
						if (teste === -1) {
							router.notfound()
						} else if (filter === undefined){
							app.$refs.view.$children[0].$children[teste].hover = true
							app.$refs.view.$children[0].$children[teste].on = true
							app.$refs.view.$children[0].$children[teste].playThis()
							ga('send', 'pageview', '/media/'+id)
						} else {
							app.$refs.view.$children[0].$children[40].$children[teste].hover = true
							app.$refs.view.$children[0].$children[40].$children[teste].on = true
							app.$refs.view.$children[0].$children[40].$children[teste].playThis()
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
				if (i === hip.length - 1) {
					init()
				}
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
