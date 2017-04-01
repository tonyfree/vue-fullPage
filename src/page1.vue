<template>
  <div class="project-desc">
    <span v-html="code" v-for="code in codes"></span>
    <span v-show="show">|</span>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        msg: `VueProject`.split('').concat(['<br>','{','<br>']).concat(` return "tony"`.split('')).concat(['<br>','}']),
        codes: [],
        msgIndex: 0,
        show: true
      }
    },
    created() {
      setInterval(this.addCodes,300)
      let timer = setInterval(()=>{
        this.show = !this.show
        if(this.msgIndex === this.msg.length) {
          this.show = false
          clearInterval(timer)
          timer = null
        }
      },60)
    },
    methods: {
      addCodes() {
        this.codes.push(this.msg[this.msgIndex])
        this.msgIndex++
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