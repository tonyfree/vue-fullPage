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
          v-if="index+1==slotIndex" :state="state" :page="curIndex" :index="slotIndex"></slot>      
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
          default: '#fff'
        }
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
              this.endCount = 0
              return
            }
            this.name = 'down'
            this.curIndex++
          } 
          if (e.deltaY < 0) {
            if (this.curIndex === 1) {
              this.canWheel = true
              this.endCount = 0
              return
            }
            this.name = 'up'
            this.curIndex--
          }
        },
        end() {   
          this.endCount++;
          if(this.endCount === 2) {
            this.canWheel = true
            this.endCount = 0
            this.state = 'transitionend' 
          }
        },
        // 当只使用javasript过渡时，在enter和leave中，回调函数done是必须的，等元素的过渡或动画执行完毕后执行done回调
        // 这里我们使用了css过渡，done可以不执行
        enter (el, done) {
          this.state = 'enter' 
        },
        leave(el, done) {
          this.state = 'leave' 
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