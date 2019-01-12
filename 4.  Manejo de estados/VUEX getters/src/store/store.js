import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        tareas: [
            {nombre: 'Uno', completado: false},
            {nombre: 'Dos', completado: false},
            {nombre: 'Tres', completado: false},
            {nombre: 'Cuatro', completado: true},
            {nombre: 'Cinco', completado: false}
        ]
    },
    getters: {
        tareasCompletadas: (state) => state.tareas.filter((tarea) => tarea.completado).length
    }
})