require('./transition.css')
import Vue from 'vue'
import Fullpage from '@/components/Fullpage.vue'

new Vue({
  el: '#app',
  components: {
    Fullpage
  },
  data: {
    bgColor:['#c90','#c09','#09c','#9c0']
  }
})
