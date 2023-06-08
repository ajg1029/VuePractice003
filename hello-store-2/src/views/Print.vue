<template>
  <div>
    PRINT
    <div>
      <button @click="testJSPM">testJSPM</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Print',
  data() {
    return {
      cpj: null,
    }
  },
  created() {
    /* eslint-disable */
    console.log(JSPM)
    // console.log(this)
  },
  methods: {
    testJSPM() {
      // return new Promise((resolve, reject) => {
      //   JSPM.JSPrintManager.auto_reconnect = true
      //   // JSPM.JSPrintManager.start().then((data) => {
      //   //   console.log(data)
      //   //   resolve(data)
      //   // }).catch((err) => {
      //   //   console.log(err)
      //   //   reject(err)
      //   // })

      //   // JSPM.JSPrintManager.start().then(function() {
      //   //   this.cpj = new JSPM.ClientPrintJob()
      //   // })
      // })
      
    }
  }
}
</script>

<style>

</style>