<template>
  <div>
    LOGIN
    <div>
      <input type="text" v-model="testMessageInput" />
      <button @click="$store.dispatch('testAction', testMessageInput)">Test Action</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Login',
  data() {
    return {
      testMessageInput: '',
    }
  },
}
</script>

<style>

</style>