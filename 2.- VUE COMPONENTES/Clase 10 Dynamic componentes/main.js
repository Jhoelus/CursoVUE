Vue.component('lista-tareas', {
    template:` 
            <div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="tarea in tareas" :unaTarea='tarea' :key="tarea"></tarea>
                </ul>
            </div>`,
    data() {
        return {
            tareas: [
                "Finalizar secion componentes",
                "Iniciar workflow con vue cli",
                "Terminar de estudiar la doc de VUE",
                "Seguir jugando con Vue Router"
            ]
        }
    }
});

Vue.component('tarea', {
    props: ['unaTarea'],
    template: `<li> {{ unaTarea }} </li>`
})

Vue.component('contacto', {
    template: `<div><a href="mailto:juan@algo.com">juan@algo.com</a></div>`
})

Vue.component('bio', {
    template: `<div><p>xxxxxxxxxxxxxxxxxxx</p></div>`
})

new Vue({
    el: "main",
    data: {
        nameComponente: null
    }
});