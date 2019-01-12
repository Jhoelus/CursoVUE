import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        cantidad: 0
    },
    mutations: {
        aumentar: (state, aumentar) => state.cantidad += aumentar,
        reducir: (state, minus) => state.cantidad -= minus
    },
    actions: {
        aumentarAsinc: (context, aumentar) => {
            setTimeout(() => context.commit('aumentar', aumentar),2000)
        },
        reducirAsinc: (context, {minus}) => {
            setTimeout(() => context.commit('reducir', minus),2000)
       }
    }
})