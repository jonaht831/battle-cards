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
    players: [],
    opponents: []
  },
  mutations: {
    setGame(state, game) {
      state.game = game
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
    playTurn({ commit }, gameId) {
      gameApi.get("/games/" + gameId)
        .then(res => commit('setGame', res.data.game))
    }
  }
})
