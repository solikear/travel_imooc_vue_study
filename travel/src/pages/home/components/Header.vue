<!--
 * @Author: your name
 * @Date: 2020-09-23 10:56:39
 * @LastEditTime: 2020-09-24 16:31:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \travel_imooc_vue\travel\src\pages\home\components\Header.vue
-->
<template>
  <div>
    <div class="header">
      <div class="header-left back-icon">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{ city }}
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "HomeHeader",
  computed:{
    ...mapState(['city'])
  }
};
</script>

<style lang="stylus" scoped>
// 用配置好的别名的话 要在前面加~
@import "~styles/varibles.styl"
.header
  display: flex
  line-height: $headerHeight
  background: $bgColor
  color #fff

  .header-left
    width: .64rem
    float: left

    .back-icon
      text-align: center
      font-size: .4rem

  .header-right
    min-width: 1.04rem
    padding 0 .1rem
    float: right
    text-align: center
    color #fff
    .arrow-icon
      margin-left: .04rem
      font-size: .24rem

  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
</style>
