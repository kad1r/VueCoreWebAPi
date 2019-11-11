<template>
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <td>Select</td>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Year</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <input type="checkbox" :value="product.id" />
          </td>
          <td>{{product.title}}</td>
          <td>{{product.description}}</td>
          <td>$ {{product.price}}</td>
          <td>{{product.year}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "name",
  data() {
    return {
      products: []
    };
  },
  methods: {
    refresh: function(_year) {
      var products = require("../assets/data/product_list.json");

      products = products.filter(x => {
        return x.year == _year;
      });

      this.products = products;
    }
  },

  mounted() {
    console.log("product list mounted!");
  },
  computed: {
    ...mapState[("year", "message")]
  },
  created() {
    console.log("product list created!");
    this.refresh(this.$store.state.year.year);
  }
};
</script>