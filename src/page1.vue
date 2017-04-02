<template>
  <div class="project-desc">
    <span v-html="code" v-for="code in codes"></span>
    <span v-show="show">|</span>
  </div>
</template>

<script>
  export default {
    props:['state'],
    data() {
      return {
        msg: `VueProject`.split('').concat(['<br>','{','<br>'],` return "tony"`.split(''),['<br>','}']),
        codes: [],
        msgIndex: 0,
        show: true,
        timer1: null,
        timer2: null
      }
    },
    methods: {
      addCodes() {
        this.codes.push(this.msg[this.msgIndex])
        this.msgIndex++
      }
    },
    watch: {
      state() {
        if(this.state == 'enter') {
          setTimeout(()=>{
            this.timer2 = setInterval(this.addCodes,300)
    
            this.timer1 = setInterval(()=>{
              this.show = !this.show
              if(this.msgIndex === this.msg.length) {
                this.show = false
                clearInterval(this.timer1)
                this.timer1 = null
                clearInterval(this.timer2)
                this.timer2 = null
              }
            },60)
          },1000)  
        }

        if(this.state == 'leave') {
           this.show = false
                clearInterval(this.timer1)
                this.timer1 = null
                clearInterval(this.timer2)
                this.timer2 = null
                this.codes = []
                this.msgIndex = 0
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