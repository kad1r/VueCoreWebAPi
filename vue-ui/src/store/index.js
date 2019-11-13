import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// used module exporting technique in ./store/modules/index.js
// import mods from './modules';

import { year } from './modules/YearModule';
import { productpage } from './modules/ProductModule';
import { productlist } from './modules/ProductListModule';

export default new Vuex.Store({
  modules: {
    year, productpage, productlist,
  },
  // actions: {
  //   // reset states of all modules
  //   // usage: this.$store.dispatch('reset');
  //   reset({ commit }) {
  //     Object.keys(mods).forEach(mod => {
  //       console.log(mod);
  //       console.log(commit);
  //       // commit(`${mod}/reset`);
  //     });
  //   }
  // }
});
