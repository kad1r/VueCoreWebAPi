<template>
  <div>
    <b-alert show>Default Alert</b-alert>
    <div class="col-6">
      <div class="form-group row">
        <input type="hidden" v-model="product.id" />
        <label class="col-sm-2" for="category">Category</label>
        <select v-model="product.category" id="category" class="form-control col-sm-10" :class="{ requiredField: $v.category.required }" placeholder="Product Category">
          <option value="0">Select product category.</option>
          <option v-for="(category, index) in getActiveCategories" :key="index" :value="category.id">{{ category.title }}</option>
        </select>
      </div>
      <div class="form-group row">
        <label class="col-sm-2" for="heading">Heading</label>
        <input v-model.trim="product.heading" class="form-control col-sm-10" :class="{ requiredField: !$v.heading.required }" type="text" id="heading" placeholder="Product Heading" />
      </div>
      <div class="form-group row">
        <label class="col-sm-2" for="description">Description</label>
        <textarea v-model.trim="product.description" rows="5" class="form-control col-sm-10" :class="{ requiredField: !$v.description.required }" id="description" placeholder="Product Description"></textarea>
      </div>
      <div class="form-group row chekbox">
        <label class="col-sm-2" for="isactive">Is Active?</label>
        <input v-model="product.isactive" type="checkbox" id="isactive" />
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapState } from "vuex";

export default {
  name: "product",
  data() {
    return {
      product: {
        id: 0,
        category: 0,
        heading: "",
        description: "",
        isactive: false,
      },
    };
  },
  validations: {
    category: { required },
    heading: { required },
    description: { required },
  },
  methods: {
    addProduct: function() {
      var product = this.product;
      // reset form after submit
      // this.$v.$touch();

      // if (this.$v.$invalid || this.$v.$error) return;

      if (localStorage) {
        let products = JSON.parse(localStorage.getItem("products"));

        if (products == null || typeof products === "undefined") {
          products = [];
        }

        product.id = products.length + 1;
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        location.href = this.$route.fullPath;
      }
    },
  },
  computed: {
    ...mapState["productpage"],
    getActiveCategories: function() {
      return this.$store.state.productpage.categories.filter((x) => {
        return x.isactive;
      });
    },
  },
  created() {
    var categories = require("../assets/data/categories.json");

    this.$store.dispatch("productpage/load", {
      categories: categories,
    });

    if (Object.keys(this.$route.query).length > 0) {
      var products = JSON.parse(localStorage.getItem("products"));

      if (products.length > 0 && typeof this.$route.query.id !== "undefined") {
        var product = products.filter((x) => {
          return x.id === parseInt(this.$route.query.id);
        });

        this.product = product[0];
      }
    }

    this.$parent.saveFunction = this.addProduct;
  },
};
</script>
