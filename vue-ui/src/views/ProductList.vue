<template>
  <div class="table-responsive">
    <table v-if="this.$store.state.productlist.products.length > 0" class="table table-hover">
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
        <tr v-for="product in this.$store.state.productlist.products" :key="product.id">
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
  name: "productlist",
  methods: {},
  mounted() {
    this.$store.dispatch("productlist/load", this.$store.state.year.year);
  },
  computed: {
    ...mapState[("year", "productlist")]
  }
};
</script>