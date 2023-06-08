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
    // testJSPM() {
    //   // return new Promise((resolve, reject) => {
    //   //   JSPM.JSPrintManager.auto_reconnect = true
    //   //   // JSPM.JSPrintManager.start().then((data) => {
    //   //   //   console.log(data)
    //   //   //   resolve(data)
    //   //   // }).catch((err) => {
    //   //   //   console.log(err)
    //   //   //   reject(err)
    //   //   // })

    //   //   // JSPM.JSPrintManager.start().then(function() {
    //   //   //   this.cpj = new JSPM.ClientPrintJob()
    //   //   // })
    //   // })
    //   var cpj = {}
    //   cpj.clientPrinter = new JSPM.SerialPortPrinter(
    //     'Brother QL-700',
    //     9600,
    //     // JSPM.serial.Parity['None'],        
    //     // JSPM.serial.StopBits['None'],      
    //     // JSPM.serial.DataBits['Eight'],      
    //     // JSPM.serial.Handshake['None'],        
    //   )
    //   cpj.sendToClient()
    // }

    connectPrinter() {
      // 인쇄 테스트
      // 아마도 아래의 순서로 작업해보면 될 것 같다.
      // 1. 프린터 연결
      // 2. 프린터 설정 (port, baud rate 등)
      // 3. 몰?루

    }
  }
}
</script>

<style>

</style>