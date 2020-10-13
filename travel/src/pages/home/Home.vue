<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
// import axios from 'axios'
import {mapState} from 'vuex'
import {getHomeInfo} from '@/service/home'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeHeader,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    async getHomeInfo() {
      // axios.get(`/api/index.json?city=${this.city}`).then(this.getHomeInfoSucc)
      let data = await getHomeInfo(this.city)
      console.log(data)
      this.getHomeInfoSucc(data)
    },
    getHomeInfoSucc(res) {
      // console.log(res)
      // res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  // 只触发一次
  mounted() {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  //keepalive下 回到缓存页面时候触发的生命周期钩子
  activated() {
    //如果请求城市与上次存储的不同 则重新请求一次数据 并更新存储
    if (this.lastCity !== this.city) {
      this.getHomeInfo()
      this.lastCity = this.city
    }
  },

}
</script>

<style>

</style>
