import Vuex, {createLogger} from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [createLogger()],
    state: {
        email: '',
        password: ''
    },
    getters: {
        
    },
    mutations: {
        updateEmail(state, value){
            state.email = value;
        },
        updatePassword(state, value){
            state.password = value;
        },        
    },
    actions: {
        updateEmail(context, value){
            context.commit('updateEmail' , value);
        },
        updatePassword(context, value){
            context.commit('updatePassword' , value);
        }
    }
})

export { store };