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
        <tr v-for="product in getList" :key="product.id">
          <td>
            <input type="checkbox" :value="product.id" @click.stop="setSelected(product.id)" />
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
  data() {
    return {
      list: [],
    };
  },
  methods: {
    setSelected: function(id) {
      if (this.$store.state.app.selectedRows.indexOf(id) === -1) {
        this.$store.state.app.selectedRows.push(id);
      }
    },
    deleteSelected: function() {
      let ids = this.$store.state.app.selectedRows;
      debugger;

      if (ids.length > 0) {
        let products = JSON.parse(localStorage.getItem("products"));

        if (products.length > 0) {
          ids.forEach((id) => {
            let index = products.findIndex((x) => {
              return x.id === id;
            });

            products.splice(index, 1);
            localStorage.setItem("products", JSON.stringify(products));
            location.reload(true);
          });
        }
      }
    },
  },
  mounted() {
    this.$store.dispatch("productlist/load", this.$store.state.year.year);
    this.$parent.deleteFunction = this.deleteSelected;
  },
  computed: {
    ...mapState[("app", "year", "productlist")],
    getList: function() {
      return this.$store.state.productlist.products;
    },
  },
};
</script>