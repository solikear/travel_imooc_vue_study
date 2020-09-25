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
      <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="stylus" scoped>
// 用配置好的别名的话 要在前面加~
@import "~styles/varibles.styl"
.header
  display: flex
  line-height: .86rem
  background: $bgColor
  color #fff

  .header-left
    width: .64rem
    float: left

    .back-icon
      text-align: center
      font-size: .4rem

  .header-right
    width: 1.24rem
    float: right
    text-align: center

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
