<template>
  <div>
    <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :galleryImgs="galleryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import {getDetailInfo} from '@/service/detail'

export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      categoryList: []
    }
  },
  methods: {
   async getDetailInfo() {
      // axios.get('/api/detail.json', {
      //   params: {
      //     id: this.$route.params.id
      //   }
      // }).then(this.handleGetDataSuccess)
     let detailId = this.$route.params.id;
     let data = await getDetailInfo(detailId)
     this.handleGetDataSuccess(data)
    },
    handleGetDataSuccess(res) {
      // res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.sightName = data.sightName
        this.galleryImgs = data.galleryImgs
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.categoryList = data.categoryList
      }

    }
  },
  mounted() {
    this.getDetailInfo()
  },
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>