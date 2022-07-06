<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <my-header></my-header>
  <div class="app">
    <router-view></router-view>
  </div>
  <my-footer></my-footer>


</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MyHeader,
    MyFooter
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 1200px;
}

p {
  font-size: 50px;
  background-color: rgba(244, 243, 253, 0.747);
}

.app {
  /* border: 3px green solid; */
  background-color: azure;
  min-height: 1000px;
  max-width: 1200px;
}
</style>
