import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    year: {
      state: {
        year: 2019,
        message: "Hola!"
      },
      getters: {
        getSelectedYear(s) {
          return s.state.year;
        }
      },
      mutations: {
        setNewYear(state, year) {
          state.year = year;
        }
      },
      actions: {
        updateSelectedYear({ commit }, year) {
          commit("setNewYear", year);
        }
      },
    }
  }
});
