<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapeer">
            <div class="button">{{ currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapeer" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="city of item" :key="city.id" @click="handleCityClick(city.name)">
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import {mapState,mapMutations} from 'vuex'
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String,
  },
  methods:{
    handleCityClick(city){
      // 没有异步操作 省略action
      // this.$store.dispatch('changeCity',city)
      // this.$store.commit('changeCity',city)

      this.changeCity(city)
      this.$router.push("/")
    },
    //把vuex 的 mutations方法映射过来
    //相当于 methods多了个和mutations里一样的changeCity方法（方法代理）
    ...mapMutations(['changeCity'])
  },
  computed:{
    ...mapState({
      currentCity: 'city'
    })
  },
  updated() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper,{
        click:true
      });
      // console.log(mapState(['city']))
    });
  },
  watch: {
    letter() {
      // console.log(this.letter);
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color #ccc

  &:after
    border-color #ccc

.list
  overflow hidden
  position: absolute;
  top 1.58rem
  left 0
  right 0
  bottom 0

  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    color #666
    font-size .26rem

  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem

    .button-wrapeer
      float left
      width 33.3%

      .button
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem

  .item-list
    .item
      line-height .76rem
      padding-left: .2rem;
</style>
