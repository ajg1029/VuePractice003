import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testState: 'Hello from Vuex!'
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
    
  },
})