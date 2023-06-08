import Vue from 'vue'
import Vuex from 'vuex'
import coffeeInfoModule from './modules/coffeeInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testState: 'Hello from Vuex!'
  },
  getters: {
    testGetter(state) {
      return state.testState + ' from getter'
    }
  },
  mutations: {
    TEST_MUTATION(state, payload) {
      state.testState = payload
    }
  },
  actions: {
    testAction({ commit }, payload) {
      commit('TEST_MUTATION', payload)
    }
  },
  modules: {
    coffeeInfo: coffeeInfoModule
  },
})