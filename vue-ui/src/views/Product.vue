<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <span>{{this.$store.state.year}}</span>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <div class="form-group row">
          <label class="col-sm-2" for="category">Category</label>
          <select
            v-model="product.category"
            id="category"
            class="form-control col-sm-10"
            :class="{ 'requiredField': $v.product.category.required }"
            placeholder="Product Category"
          >
            <option value="0">Select product category</option>
            <option value="1">Electronics</option>
            <option value="2">Home Accessories</option>
            <option value="2">Camping</option>
          </select>
        </div>
        <div class="form-group row">
          <label class="col-sm-2" for="heading">Heading</label>
          <input
            v-model.trim="product.heading"
            class="form-control col-sm-10"
            :class="{ 'requiredField': !$v.product.heading.required }"
            type="text"
            id="heading"
            placeholder="Product Heading"
          />
        </div>
        <div class="form-group row">
          <label class="col-sm-2" for="description">Description</label>
          <textarea
            v-model.trim="product.description"
            rows="5"
            class="form-control col-sm-10"
            :class="{ 'requiredField': !$v.product.description.required }"
            id="description"
            placeholder="Product Description"
          ></textarea>
        </div>
        <div class="form-group row chekbox">
          <label class="col-sm-2" for="isactive">Is Active?</label>
          <input v-model="product.isactive" type="checkbox" id="isactive" />
        </div>
        <div class="form-group row">
          <button
            type="button"
            v-on:click.stop.prevent="onSubmit(product)"
            class="btn btn-primary offset-sm-2"
          >Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "product",
  data() {
    return {
      product: {
        category: 0
      },
      updateComp: false
    };
  },
  validations: {
    product: {
      category: { required },
      heading: { required },
      description: { required }
    }
  },
  methods: {
    refresh: function(update) {
      this.updateComp = update;
    },
    onSubmit: function(product) {
      this.$v.$touch();
      debugger;
      if (this.$v.$invalid || this.$v.$error) return;

      if (localStorage) {
        let products = JSON.parse(localStorage.getItem("products"));

        if (products == null || typeof products === "undefined") {
          products = [];
        }

        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
      }
    },
    yearChanged: function() {
      console.log("parent triggered!");
    }
  },
  mounted() {
    /*
    let lastProduct = localStorage.getItem("products");

    if (lastProduct) {
      this.product = JSON.parse(lastProduct);
      console.log(lastProduct);
    }
    */
  },
  created() {
    // fetch(url)
    //   .then(res => {
    //     console.log(res);
    //     res.json();
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //     this.links = response;
    //   });
  }
};
</script>