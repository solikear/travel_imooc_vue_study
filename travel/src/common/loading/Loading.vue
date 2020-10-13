<template>
  <div class="loading">
    <van-loading type="spinner" color="#1989fa" >加载中</van-loading>
  </div>
</template>

<script>
import Vue from 'vue';


export default {
  name: 'LOADING',
  data() {
    return {}
  },
}
</script>
<style lang="stylus" scoped>
.loading
  position fixed
  z-index 9999
  width 100%
  height 100%
  background rgba(255, 255, 255, 0.5)
  display flex
  justify-content center
  align-items center
</style>