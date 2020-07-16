<template>
  <form class="login" @submit.prevent.stop="onSubmit">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>

          <md-field >
            <label for="emailID">Email</label>
            <md-input id="emailID" type="email" name="email" v-model="email"  />
            
          </md-field>

          <md-field >
            <label for="passwordID">Password</label>
            <md-input id="passwordID" name="password" v-model="password"  />
            
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
import { mapState, mapActions  } from 'vuex';

import {v4} from 'uuid';

export default {
    name : "LoginVuex",
    data(){
        return {
            emailID : v4(),
            email : '',
            password : '',
            passwordID : v4()
        }
    },
    computed: {
        ...mapState(['email','password'])
    },
    methods: {
        
        ...mapActions(['updateEmail','updatePassword']),

        onSubmit(){            
            console.log({email:this.email, password: this.password})
            
        },
      

    }

};
</script>

<style scoped>
  .login{
    margin: auto;
    width: 60%;
  }
  
</style>
