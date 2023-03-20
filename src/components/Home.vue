<template>  
  <div>
    <h1>Home</h1>
    Hey! You can either <router-link :to="{name: 'Add'}">add an item</router-link> or <router-link :to="{name: 'List'}">check out all items</router-link> in the list.
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>

</style>
