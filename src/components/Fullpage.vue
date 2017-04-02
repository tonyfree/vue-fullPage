<template>
  <div  @wheel="wheelEvent($event)">
      <transition-group :name="name" tag="div"  
      v-on:enter="enter"
      v-on:leave="leave">
        <div v-for="(page,index) in pages" :key="index" class="block" 
        :style="{'background-color':bgColor&&bgColor[index]?bgColor[index]:baseBgc}"
        v-show="curIndex===index+1" 
        @transitionend="end">
          <slot v-for="slotIndex in pages" :name="'slot'+slotIndex" 
          v-if="index+1==slotIndex" :state="state"></slot>      
        </div>
      </transition-group>
  </div>
</template>

<script>        
    export default {
      props: {
        pages:{
          type: Number,
          required: true
        },
        bgColor:{
          type: Array
        },
        baseBgc:{
          default: '#c90'
        },
        slots: {}
      },
      data() {
        return {
          curIndex: 1,
          name: 'down',
          canWheel: true,
          endCount:0,
          state: ''
        }
      },
      methods: {
        wheelEvent(e) {
          if(!this.canWheel){
            return
          }
          this.canWheel = false
          if (e.deltaY > 0) {
            if (this.curIndex === this.pages) {
              this.canWheel = true
              return
            }
            this.name = 'down'
            this.curIndex++
          } else {
            if (this.curIndex === 1) {
              this.canWheel = true
              return
            }
            this.name = 'up'
            this.curIndex--
          }
          console.log('wheel:',this.canWheel)
        },
        end() {   
          this.canWheel = true
          this.endCount++;
          console.log(this.endCount)
          if(this.endCount === 2) {
            this.endCount = 0
            console.log('end')
            this.state = 'transitionend' 
          }
          console.log('end:',this.canWheel)
        },
        // 此回调函数是可选项的设置
        // 与 CSS 结合时使用
        enter (el, done) {
          console.log('enter')
          // Velocity(el, { transform: 'translateY(0)' }, { duration: 1000 },{ complete: done })
          this.state = 'enter' 
        },
        // 此回调函数是可选项的设置
        // 与 CSS 结合时使用
        leave(el, done) {
          console.log('leave')
          this.state = 'leave' 
          // Velocity(el, { transform: 'translateY(-100%)' }, { duration: 1000 },{ complete: done })
        }
      }
    }
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
  }
  
  .block {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  
  .down-enter-active {
    transition: all 1s ease;
    transform: translateY(0);
  }
  
  .down-leave-active {
    transition: all 1s ease;
    transform: translateY(-100%);
  }
  
  .down-enter {
    transform: translateY(100%);
  }
  
  .down-leave {
    transform: translateY(0);
  }
  
  .up-enter-active {
    transition: all 1s ease;
    transform: translateY(0);
  }
  
  .up-leave-active {
    transition: all 1s ease;
    transform: translateY(100%);
  }
  
  .up-enter {
    transform: translateY(-100%);
  }
  
  .up-leave {
    transform: translateY(0);
  }

</style>