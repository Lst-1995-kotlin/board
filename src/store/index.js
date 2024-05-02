import { createStore } from 'vuex'

export default createStore({
  state: { // 변수 선언
    loginUser:null,
  },
  getters: {
  },
  mutations: { // 새터의 개념을 가지고 있는 함수 선언
    setLoginUser(state,user){
      state.loginUser = user
    },
    logout(state) {
      state.loginUser = null
    }
  },
  actions: {
  },
  modules: {
  }
})
