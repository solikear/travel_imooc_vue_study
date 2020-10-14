/*
 * @Author: your name
 * @Date: 2020-09-21 09:21:57
 * @LastEditTime: 2020-09-25 10:18:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \travel_imooc_vue\travel\src\main.js
 */
import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//轮播插件
import VueAwesomeSwiper from "vue-awesome-swiper";
//引入api
import api from "@/api";
Vue.prototype.$api = api

// import {fetchGet,fetchPost} from "@/util/axios";
// Vue.prototype.$get = fetchGet
// Vue.prototype.$post = fetchPost


//解决移动端上300ms点击延迟
//remove : 更改为使用CSS的touch-action: manipulation 来解决点击延迟问题
// import fastClick from "fastclick";

//解决部分低版本浏览器不支持promise的方法
//用babel-polyfill可以让低版本浏览器兼容promise
// 原理是 把promise方法补充到了JS里
import  'babel-polyfill'
// element-ui的CSS
import  'element-ui/lib/theme-chalk/index.css'
//reset.css 重置一些特定样式 让不同浏览器下效果一致
import "styles/reset.css";
import "styles/border.css";
//图标 iconfont
import "styles/iconfont.css";
/*特别提示 因为vue-awesome-swiper插件最新版依赖swiper6下会存在BUG 例如小圆点不显示。
所以安装 vue-awesome-swiper 3.1.3版本
2020-09-25 14:47:09
 */
// import { Loading } from 'vant';
// Vue.use(Loading);

import "swiper/dist/css/swiper.css"

// fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

createApp(App).use(router).use(store).mount("#app");
