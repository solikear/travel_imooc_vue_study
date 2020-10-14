import Vuex from 'vuex'
import state from "@/store/state";
import mutations from "@/store/mutations";
import actions from '@/store/actions'



export default Vuex.createStore({
  state: state,
  mutations: mutations,
  actions:actions,
  getters:{
    //getter 类似计算属性
    //有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数：
    //避免数据冗余
    doubleCity(state){
      return state.city +' ' + state.city
    }
  },
  modules: {
  }
});
