<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <p>vuex store state testState : {{ $store.state.testState }}</p>
      <p>vuex store state testGetter : {{ $store.getters.testGetter }}</p>
      <p>vuex store coffeeInfoModule state coffeeMenu1: {{ $store.state.coffeeInfo.coffeeMenu1 }}</p>
      <p>vuex store coffeeInfoModule state coffeeMenu2: {{ $store.state.coffeeInfo.coffeeMenu2 }}</p>
      <div>
        <button @click="testMethod">testAction</button>
      </div>
    </div>
    <br />
    <div>
      <router-link to="/">Home</router-link> | <router-link to="/config">Config</router-link> | <router-link to="/login">Login</router-link>
    </div>
    <br />
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  created() {
    console.log(process.env.VUE_APP_ARTIST)
    // eslint-disable-next-line
    console.log(myName)
    // eslint-disable-next-line
    console.log(myMessage)

  },
  methods: {
    testMethod() {
      this.$store.dispatch('coffeeInfo/testAction')
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
