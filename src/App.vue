<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './assets/css/base.css';
  html{
    margin:0;
    padding:0;
    height: 100%;
  }
  body{
    margin:0;
    padding:0;
    height: 100%;
  }
  #app{
    height: 100%;
  }
</style>
