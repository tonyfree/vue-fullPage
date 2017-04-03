<template>
  <div class="project-desc">
    <span v-html="code" v-for="code in codes"></span>
  </div>
</template>

<script>
  export default {
    props:['state','page','index'],
    data() {
      return {
        msg: `VueProject`.split('').concat(['<br>','{','<br>'],` return "tony"`.split(''),['<br>','}']),
        codes: [],
        msgIndex: 0,
        timer: null
      }
    },
    methods: {
      addCodes() {
        this.clear()
        this.codes.push(this.msg[this.msgIndex])
        this.msgIndex++
      },
      clear() {
        if(this.msgIndex > this.msg.length - 1) {
          clearInterval(this.timer)
          this.timer = null
        }
      }
    },
    watch: {
      state() {
        this.clear()
        this.codes = []
        this.msgIndex = 0
        if( (this.state == 'enter'|| this.state == 'leave') &&this.page==this.index) {
          this.timer = setInterval(this.addCodes,300)
        }
      }
    }
  }
</script>


<style>
  .project-desc {
    position: absolute;
    bottom: 30px;
    left: 30px;
    font-size: 30px;
    font-weight: bold;
  }
</style>