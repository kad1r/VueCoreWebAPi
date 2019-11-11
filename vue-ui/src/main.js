import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";

import "bootstrap-css-only/css/bootstrap.min.css";

Vue.component("NavBar", require("./components/Navigation.vue").default);
Vue.component("HelloWorld", require("./components/HelloWorld.vue").default);

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
