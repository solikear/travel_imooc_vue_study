import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//解决移动端上300ms点击延迟
import fastClick from 'fastclick'

//reset.css 重置一些特定样式 让不同浏览器下效果一致
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
