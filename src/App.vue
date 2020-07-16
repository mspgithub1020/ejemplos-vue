<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<Hola/>-->
    <!--<Formulario/>-->
    <LoginVuex/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Hola from './components/ejercicio1.vue'
//import Formulario from './components/ejercicio2.vue'
import LoginVuex from './vuex/LoginVuex'

export default {
  name: 'App',
  components: {
    //HelloWorld
    //Hola,
    //Formulario
    LoginVuex

  }
}
</script>

<style>
#app {
  
  margin-top: 60px;
}
</style>


