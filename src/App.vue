<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{name: 'Home'}" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'Add'}" class="nav-link">Add Item</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'List'}" class="nav-link">All Items</router-link>
        </li>
      </ul>
    </nav>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.gap {
  margin-top: 50px;
}
</style>
