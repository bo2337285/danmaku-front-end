import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const state = {
  formMsg: "", //表单文本
  msgItemList: [] //留言列表
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
