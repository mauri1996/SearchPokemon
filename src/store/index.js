import Vue from "vue";
import VuexPersistence from "vuex-persist";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    correctPoint: 0,
    incorrectPoint: 0,
  },
  getters: {},
  mutations: {
    addCorrectPoint(state) {
      state.correctPoint++;
    },
    addIncorrectPoint(state) {
      state.incorrectPoint++;
    },
  },
  actions: {},
  modules: {},
  plugins: [
    new VuexPersistence({
      storage: window.localStorage,
    }).plugin,
  ],
});
