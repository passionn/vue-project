<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<div class="box_bg"></div>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box_bg{
  width:110px;
  height:119px;
  background:url(./assets/gift4.png) no-repeat;

}


</style>
