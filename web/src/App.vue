<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NewBar.vue'
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap" 
export default {
  components: {
    NavBar
  }
}
</script>

<style>
body {
  background-image: url("@/assets/background0.png");
  background-size: cover;
}
</style>
