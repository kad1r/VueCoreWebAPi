import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { year } from './modules/Year.module';
import { test } from './modules/ProductList.module';

export default new Vuex.Store({
  modules: {
    test,
    year
  }
});
