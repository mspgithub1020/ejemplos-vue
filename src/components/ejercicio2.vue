<!-- 2 - Crear un formulario de login con un campo email y un campo password. 
Cuando se envíe el formulario pintar por consola los datos introducidos. 
El email debe tener un formato adecuado 
(https://www.w3resource.com/javascript/form/email-validation.php) y la 
contraseña debe tener al menos 6 caracteres. Mostrar los errores correspondientes 
después de escribir en cada uno de los campos y cuando se envíe el formulario.
-->

<template>
  <form novalidate class="login" @submit.prevent.stop="onSubmit">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>

          <md-field >
            <label for="emailID">Email</label>
            <md-input id="emailID" type="email" name="email" @blur="validateEmail"  autocomplete="email" v-model="email"  />
            <p role="alert" v-if="emailError">{{emailError}}</p>
          </md-field>

          <md-field >
            <label for="passwordID">Password</label>
            <md-input id="passwordID" name="password" @blur="validatePassword" autocomplete="family-name" v-model="password"  />
            <p role="alert" v-if="passwordError">{{passwordError}}</p>
          </md-field>

        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary" >Enviar</md-button>
        </md-card-actions>
      </md-card>

      
    </form>

</template>

<script>

/* eslint-disable no-debugger */

import {v4} from 'uuid';

const isEmail = (value) => {

  const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
  return isValidEmail ? '' : 'Formato de email incorrecto';

}

const isPassword = (value) => {

  //Para verificar una contraseña de entre 6 y 20 caracteres que contenga al menos un 
  //dígito numérico, una letra mayúscula y una letra minúscula
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value);
  return isValidPassword ? '' : 'El password debe contener entre 6 a 20 caracteres  , al menos un digito , una letra mayuscula y una minuscula';

}

export default {
    name : "Formulario",
    data(){
      return {
            emailID : v4(),
            email : '',
            password : '',
            passwordID : v4(),
            emailerror : '',
            passwordError : ''

        }
    },
    methods: {
      onSubmit(){
        this.validateForm();
        if(this.isFormValid()){
          console.log({email:this.email, password: this.password})
        }
      },
      validateForm(){
        this.validateEmail;
      },
      isFormValid(){
        return !this.emailError && !this.passwordError;
      },
      validateEmail(){        
        this.emailError = isEmail(this.email);
      },
      validatePassword(){        
        this.passwordError = isPassword(this.password);
      }

    }

};
</script>

<style scoped>
  .login{
    margin: auto;
    width: 60%;
  }
  
</style>


<!--<span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            
    <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
            <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
            
            -->