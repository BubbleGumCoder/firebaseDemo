<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Item</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="updateItem">
            <div class="form-group">
              <label for="itemname">Item Name:</label>
              <input type="text" v-model="item.name" id="itemname" class="form-control" />
            </div>
            <div class="form-group">
              <label for="itemprice">Item Price:</label>
              <input type="text" v-model="item.price" id="itemprice" class="form-control" />
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-primary" value="Update Item" />
            </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../config/db";
export default {
  name: "EditItem",
  data() {
    return {
      item: {
        name: "",
        price: ""
      }
    };
  },
  firebase: {
    items: db.ref("items"),
    itemsObj: {
      source: db.ref("items"),
      asObject: true
    }
  },
  created() {
    let item = this.itemsObj[this.$route.params.id];
    this.item = {
      name: item.name,
      price: item.price
    };
  },
  methods: {
    updateItem() {
      this.$firebaseRefs.items.child(this.$route.params.id).set(this.item);
      this.$router.push("/index");
    }
  }
};
</script>

<style>

</style>
