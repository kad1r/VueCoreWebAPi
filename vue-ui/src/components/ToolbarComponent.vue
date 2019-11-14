<template>
  <div class="row">
    <div class="col">
      <div class="float-left">
        <div class="toolbar">
          <div class="btn-group" role="group">
            <button
              type="button"
              class="btn btn-toolbar"
              v-for="(item, index) in getAvailableToolbar"
              :key="index"
              @click.stop="(item.title === 'save') ? formSubmit() : ''"
            >
              <i :class="item.css"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="float-right">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="javascript:;">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:;">Library</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="w-100"></div>
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
  methods: {
    formSubmit: function() {
      debugger;
      this.$emit(this.$parent.saveFunction());
    }
  },
  computed: {
    getAvailableToolbar: function() {
      if (
        Object.keys(this.menuitem).length > 0 &&
        typeof this.menuitem.menu_auth !== "undefined"
      ) {
        return this.menuitem.menu_auth
          .filter(x => {
            return x.show;
          })
          .sort((x, y) => (x.sequence > y.sequence ? 1 : -1));
      } else {
        return [];
      }
    }
  },
  created() {
    console.log(this);
  }
};
</script>

<style scoped>
.toolbar .btn-group {
  background-color: #f2f2f2;
}

.toolbar i {
  width: 35px;
  height: 25px;
  line-height: 25px;
  font-size: 125%;
}
.toolbar i {
  width: 35px;
  height: 25px;
  line-height: 25px;
  font-size: 125%;
}

.btn-toolbar {
  color: #333 !important;
  background-color: #ebebeb;
  border-color: #e1e1e1;
}

.btn-toolbar:hover {
  color: #333 !important;
  background-color: #dedede;
  border-color: #dadada;
}
</style>