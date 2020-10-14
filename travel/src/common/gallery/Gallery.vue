<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="gallery-img" :src="item" alt="">
        </swiper-slide>
        <template class="swiper-pagination" v-slot:pagination></template>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallery",
  props:{
    imgs:{
      type:Array,
      default(){
        return ["https://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg"]
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type:"fraction"
        },
        observeParents:true,
        observer:true,
      }
    }
  },
  methods:{
    handleGalleryClick(){
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000

  .wrapper
    height 0
    width 100%
    padding-bottom 100%
    background #fff

    .gallery-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>