<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Hola/>
    <Formulario/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Hola from './components/ejercicio1.vue'
import Formulario from './components/ejercicio2.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    Hola,
    Formulario
  }
}
</script>

<style>
#app {
  
  margin-top: 60px;
}
</style>


<!--
font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
-->