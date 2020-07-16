import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {
        email: '',
        password: ''
    },
    getters: {
        
    },
    mutations: {
        updateEmail(e){
            state.email = e.target.value;
        },
        updatePassword(e){
            state.password = e.target.value;
        },
        
    },
    actions: {
        updateEmail(context){
            context.commit('updateEmail');
        },
        updatePassword(context){
            context.commit('updatePassword');
        }
    }
})

export { store };