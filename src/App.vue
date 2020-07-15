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

import Vue from 'vue';
import { MdButton, MdField, MdInput, Label } from 'vue-material/dist/components';
Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdInput);
Vue.use(Label);




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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
