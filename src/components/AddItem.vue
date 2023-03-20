<template>
  <div class="container">
    <div class="card">
      <div class="card-header"> 
        <h3>Add Item</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="addItem">
          <div class="form-group">
            <label for="itemname">Item Name:</label>
            <input type="text" v-model="newItem.name" id="itemname" class="form-control">
          </div>
          <div class="form-group">
            <label for="itemprice">Item Price:</label>
            <input type="text" v-model="newItem.price" id="itemprice" class="form-control">
          </div>
          <div class="form-group">
            <input type="submit" value="Add Item" class="btn btn-primary">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../config/db";

export default {
  name: "AddItem",
  firebase: {
    items: db.ref("items")
  },
  data() {
    return {
      newItem: {
        name: "",
        price: ""
      }
    };
  },
  methods: {
    addItem() {
      this.$firebaseRefs.items.push({
        name: this.newItem.name,
        price: this.newItem.price
      });
      this.newItem.name = "";
      this.newItem.price = "";
      this.$router.push("/index");
    }
  }
};
</script>

<style>

</style>
