<!-- 2 - Crear un formulario de login con un campo email y un campo password. 
Cuando se envíe el formulario pintar por consola los datos introducidos. 
El email debe tener un formato adecuado 
(https://www.w3resource.com/javascript/form/email-validation.php) y la 
contraseña debe tener al menos 6 caracteres. Mostrar los errores correspondientes 
después de escribir en cada uno de los campos y cuando se envíe el formulario.
-->

<template>
  <form>
    <md-field>
      <label>Email</label>
      <md-input v-model="email"></md-input>
    </md-field>

    <md-field>
      <label>Password</label>
      <md-input v-model="password"></md-input>
    </md-field>

    <md-button class="md-primary">Enviar</md-button>

  </form>
</template>

<script>
/*
import Vue from 'vue';
import { MdButton, MdField, MdInput, Label } from 'vue-material/dist/components';
Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdInput);
Vue.use(Label);*/

export default {
    name : "Formulario",

    data(){
        return {
            email : '',
            password : ''

        }
    },



};
</script>

<style scoped>
</style>