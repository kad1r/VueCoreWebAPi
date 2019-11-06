<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="form-group row">
          <label class="col-sm-2" for="category">Category</label>
          <select
            v-model="product.category"
            id="category"
            class="form-control col-sm-10"
            placeholder="Product Category"
          >
            <option value="1">Electronics</option>
            <option value="2">Home Accessories</option>
            <option value="2">Camping</option>
          </select>
        </div>
        <div class="form-group row">
          <label class="col-sm-2" for="heading">Heading</label>
          <input
            v-model="product.heading"
            class="form-control col-sm-10"
            type="text"
            id="heading"
            placeholder="Product Heading"
          />
        </div>
        <div class="form-group row">
          <label class="col-sm-2" for="description">Description</label>
          <textarea
            v-model="product.description"
            rows="5"
            class="form-control col-sm-10"
            id="description"
            placeholder="Product Description"
          ></textarea>
        </div>
        <div class="form-group row chekbox">
          <label class="col-sm-2" for="isactive">Is Active?</label>
          <input v-model="product.isactive" type="checkbox" id="isactive" />
        </div>
        <div class="form-group row">
          <button type="submit" class="btn btn-primary offset-sm-2">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      product: {}
    };
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