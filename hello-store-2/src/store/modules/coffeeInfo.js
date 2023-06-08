const coffeeInfoModule = {
  namespaced: true,
  state: {
    coffeeMenu1: 'Espresso',
    coffeeMenu2: 'Americano',
  },
  getters: {

  },
  mutations: {
    UPDATE_COFFEE_INFO_1(state, payload) {
      state.coffeeInfo1 = payload
    }
  },
  actions: {
    updateCoffeeInfo1({ commit }, payload) {
      commit('UPDATE_COFFEE_INFO_1', payload)
    },
    // eslint-disable-next-line no-unused-vars
    testAction(context, payload) {
      console.log(context)
    }
  },
}

export default coffeeInfoModule