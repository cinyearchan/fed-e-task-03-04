import Vue from "vue"
import Vuex from "vuex"
import user from "./modules/user"
import configuration from "./modules/configuration"
import getters from "./getters"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    configuration
  },
  getters
})

export default store
