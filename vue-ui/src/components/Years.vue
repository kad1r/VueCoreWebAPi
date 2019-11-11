<template>
  <select id="year" class="form-control col-sm-1" @change.stop="updateYear">
    <option v-for="y in [2019, 2020, 2021, 2022, 2023]" :key="y" :value="y">{{y}}</option>
  </select>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "NavigationYears",
  methods: {
    ...mapActions(["updateSelectedYear"]),
    updateYear: function(event) {
      console.log(event.target.value);
      console.log(this.$route.path);
      this.updateSelectedYear(event.target.value);
    }
  },
  computed: {
    ...mapState["year"],
    ...mapGetters(["getSelectedYear"])
  }
};
</script>