import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { year } from './modules/Year.module';
import { productpage } from './modules/Product.module';
import { productlist } from './modules/ProductList.module';

export default new Vuex.Store({
  modules: {
    year,
    productpage,
    productlist
  }
});
