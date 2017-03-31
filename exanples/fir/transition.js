require('./transition.css')

import Fullpage from 'components/Fullpage.vue'
import Hello from 'components/Hello'

new Vue({
  el: '#app',
  components: {
    Fullpage,
    Hello
  },
  data: {
    bgColor:['#c90','#c09','#09c','#9c0'],
    slots:{
      page1: 'page1',
      page2: 'page2',
      page3: 'page3',
      page4: 'page4'
    }
  }
  // data: {
  //   curIndex: 1,
  //   name: 'down',
  //   sectionNum: 4,
  //   canWheel: true,
  //   endCount:0
  // },
  // methods: {
  //   wheelEvent(e) {
  //     if(!this.canWheel){
  //       return
  //     }
  //     this.canWheel = false
  //     if (e.deltaY > 0) {
  //       if (this.curIndex === this.sectionNum) {
  //         this.canWheel = true
  //         return
  //       }
  //       this.name = 'down'
  //       this.curIndex++
  //     } else {
  //       if (this.curIndex === 1) {
  //         this.canWheel = true
  //         return
  //       }
  //       this.name = 'up'
  //       this.curIndex--
  //     }
  //   },
  //   end() {   
  //     this.canWheel = true
  //     this.endCount++;
  //     console.log(this.endCount)
  //     if(this.endCount === 2) {
  //       this.endCount = 0
  //       console.log('end')
  //     }
  //   }
  // }
})
