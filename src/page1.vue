<template>
  <div class="project-desc">
    <span v-html="msg"></span>
  </div>
</template>


<script>
  import TWEEN from 'tween.js'
  export default {
    data() {
      return {
        msg: `VueProject<br>
              {<br>
                   return "tony"<br>
              }`
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