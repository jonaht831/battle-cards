import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let gameApi = axios.create({
  baseURL: '//battlecardz.herokuapp.com/api'
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {},
    activeCards: {
      playerCardId: '',
      opponentCardId: ''
    }
  },
  mutations: {
    setGame(state, game) {
      state.game = game
    },
    setPlayerCard(state, cardId) {
      state.activeCards.playerCardId = cardId
    },
    setOpponentCard(state, cardId) {
      state.activeCards.opponentCardId = cardId
    }
  },
  actions: {
    startGame({ commit }, newGame) {
      gameApi.post("/games", newGame)
        .then(res => {
          console.log(res)
          commit('setGame', res.data.game)
          router.push({ name: 'game', params: { gameId: res.data.game.id } })
        })
    },
    getGame({ commit }, gameId) {
      gameApi.get("/games/" + gameId)
        .then(res => commit('setGame', res.data.data))
    },
    playGame({ commit }, gameId) {
      gameApi.get("/games/" + gameId)
        .then(res => commit('setGame', res.data.game))
    },
    setPlayerCard({ commit }, cardId) {
      console.log(cardId)
      commit('setPlayerCard', cardId)
    },
    setOpponentCard({ commit }, cardId) {
      console.log(cardId)
      commit('setOpponentCard', cardId)
    },

    attack({ commit, dispatch }, payload) {
      gameApi.put('games/' + payload.gameId, payload.data)
        .then(res => {
          dispatch('getGame', payload.gameId)
        })
    }
  }
})
