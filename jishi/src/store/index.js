import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    comment_list:[]
  },
  mutations:{
    comment_Change(state,data){
      state.comment_list = data
    }
  }
})

export default store