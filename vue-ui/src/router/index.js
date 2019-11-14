import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/product",
    name: "product",
    isForm: true,
    component: () =>
      import("../views/Product.vue")
  },
  {
    path: "/productlist",
    name: "productlist",
    component: () =>
      import("../views/ProductList.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
