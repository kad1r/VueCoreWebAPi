<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="col-12">
          <div class="form-group row">
            <label for="category" class="label col-sm-2">Category</label>
            <select name="category" id="category" v-model="product.category" class="form-control col-sm-10">
              <option value="0">Please select a category</option>
              <option value="1">Electronics</option>
              <option value="2">Toys</option>
              <option value="3">Clothes</option>
            </select>
          </div>
          <div class="form-group row">
            <label for="heading" class="label col-sm-2">Heading</label>
            <input type="text" class="form-control col-sm-10" id="heading" v-model="product.heading">
          </div>
          <div class="form-group row">
            <label for="description" class="label col-sm-2">Description</label>
            <textarea class="form-control col-sm-10" id="description" v-model="product.description" rows="4"></textarea>
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col-12">
          <div class="form-group row">
            <label for="type" class="label col-sm-2">Type</label>
            <select name="type" id="type" v-model="activity.type" class="form-control col-sm-10">
              <option value="0">Please select a type</option>
              <option value="1">Type 1</option>
              <option value="2">Type 2</option>
              <option value="3">Type 3</option>
            </select>
          </div>
          <div class="form-group row">
            <label for="warehouse" class="label col-sm-2">WareHouse</label>
            <select name="warehouse" id="warehouse" v-model="activity.warehouse" class="form-control col-sm-10">
              <option value="0">Please select a warehouse</option>
              <option value="1">WareHouse 1</option>
              <option value="2">WareHouse 2</option>
              <option value="3">WareHouse 3</option>
            </select>
          </div>
          <div class="form-group row">
            <label for="invoiceno" class="label col-sm-2">Invoice No</label>
            <input type="text" class="form-control col-sm-10" id="invoiceno" v-model="activity.invoiceno">
          </div>
          <div class="form-group row">
            <label for="barcode" class="label col-sm-2">Barcode</label>
            <input type="text" class="form-control col-sm-10" id="barcode" v-model="activity.barcode">
          </div>
          <div class="form-group row">
            <div class="offset-sm-2">
              <button @click="addActivity(activity)" class="btn btn-primary">Add Activity</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="table-responsive">
          <table class="table" v-if="getActivities.length > 0">
            <thead class="thead-dark">
              <tr>
                <td colspan="100%" style="text-align:left;">
                  <span><i @click="editActivity" class="fa fa-edit"></i></span>
                  <span><i @click="deleteActivity" class="fa fa-trash"></i></span>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" name="chkbx" @change="checkUncheckAll"></td>
                <td>Type</td>
                <td>WareHouse</td>
                <td>Invoice</td>
                <td>Barcode</td>
                <td>Date</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(activity, index) in getActivities" :key="index">
                <td><input type="checkbox" name="chkbx" v-model="selectedRows" :value="activity.id"></td>
                <td>{{activity.type}}</td>
                <td>{{activity.warehouse}}</td>
                <td>{{activity.invoiceno}}</td>
                <td>{{activity.barcode}}</td>
                <td>{{activity.date}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "productactivities",
  data() {
    return {
      product: {
        category: 0,
        heading: "",
        description: "",
        activities: [],
      },
      activity: {
        id: 0,
        type: 0,
        warehouse: 0,
        invoiceno: "",
        barcode: "",
        date: new Date(),
        isdeleted: false,
      },
      selectedRows: [],
    };
  },
  // validations: {
  //   product: {
  //     category: { required },
  //     heading: { required, minLength: minLength(4) },
  //     description: { required },
  //   },
  // },
  methods: {
    addActivity: function(activity) {
      let isExist = false;

      this.product.activities.forEach(function(current) {
        if (JSON.stringify(current) === JSON.stringify(activity)) {
          isExist = true;
          return;
        }
      });

      if (!isExist) {
        activity.id = this.getRowId();
        this.product.activities.push(Object.assign({}, activity));
      }
    },
    deleteActivity: function() {
      let self = this;

      if (self.selectedRows.length == 0) {
        alert("Please select minimum one row to delete.");
      } else {
        for (let index = 0; index < self.product.activities.length; index++) {
          if (
            self.selectedRows.indexOf(self.product.activities[index].id) > -1
          ) {
            self.product.activities.splice(index, 1);
            index--;
          }
        }
      }

      self.selectedRows.length = 0;
    },
    editActivity: function() {
      let self = this;

      if (self.selectedRows.length === 0 || self.selectedRows.length > 1) {
        alert("Please select minimum one row to delete.");
      } else {
        self.activity = self.product.activities.find((current) => {
          return current.id == self.selectedRows[0];
        });
      }
    },
    getRowId: function() {
      return this.product.activities.length + 1;
    },
    addToSelectedList: function(event) {
      let selected = parseInt(event.target.value),
        checked = event.target.checked,
        index = this.selectedRows.indexOf(selected);

      if (index === -1 && checked) {
        this.selectedRows.push(selected);
      } else {
        this.selectedRows.splice(index, 1);
      }
    },
    checkUncheckAll: function(event) {
      let self = this,
        checked = event.target.checked;

      if (checked) {
        self.product.activities.forEach((activity) => {
          self.selectedRows.push(activity.id);
        });
      } else {
        self.selectedRows = [];
      }
    },
  },
  computed: {
    getActivities: function() {
      return this.product.activities;
    },
  },
  created() {
    this.product = require("../assets/data/product.json");
  },
};
</script>

<style scoped>
.table thead td i {
  margin-right: 10px;
}
</style>