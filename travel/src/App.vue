<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <loading v-show="loading"></loading>-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
// import Loading from '@/common/loading/Loading'
// export default {
//   computed: {
//     ...mapState(['loading'])
//   },
//   name: 'App',
//   components: {Loading}
// }
</script>
<style>
</style>
