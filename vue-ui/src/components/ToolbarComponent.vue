<template>
  <div class="col">
    <div class="toolbar ml-auto">
      <!-- <i class="far fa-plus-square"></i> -->
      <div class="btn-group" role="group">
        <!-- <button
          type="button"
          class="btn btn-secondary"
          v-for="(item, index) in Object.keys(menuitem.menu_auth)"
          :key="index"
        >
          {{ item }}
        </button> -->
        <button type="button" class="btn btn-secondary">Add</button>
        <button type="button" class="btn btn-secondary">Copy</button>
        <button type="button" class="btn btn-secondary">Save</button>
        <button type="button" class="btn btn-secondary">Edit</button>
        <button type="button" class="btn btn-secondary">Delete</button>
        <div class="btn-group" role="group">
          <button
            id="btnExport"
            type="button"
            class="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Export
          </button>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a class="dropdown-item" href="#">Excel</a>
            <a class="dropdown-item" href="#">Pdf</a>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "toolbarComponent",
  props: {
    menuitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {
    console.log("toolbar mounted!");
  }
};
</script>
