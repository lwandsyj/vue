<template>
  <div id="app">
    <img src="./assets/logo.png">
     <a href="" :id="`one${one}`" v-if="flag">点我</a>
     <a href="" :id="'one'+one" v-else>点我else</a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      one:'123',
      flag:false
    }
  }
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
</style>
