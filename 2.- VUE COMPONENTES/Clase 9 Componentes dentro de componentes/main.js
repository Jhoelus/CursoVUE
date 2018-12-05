Vue.component('lista-tareas', {
    props: ['tareas'],
    template:` 
            <div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="tarea in tareas" :unaTarea='tarea' :key="tarea"></tarea>
                </ul>
            </div>`
});

Vue.component('tarea', {
    props: ['unaTarea'],
    template: `<li> {{ unaTarea }} </li>`
})

new Vue({
    el: "main",
    data: {
        tareas: [
            "Finalizar secion componentes",
            "Iniciar workflow con vue cli",
            "Terminar de estudiar la doc de VUE",
            "Seguir jugando con Vue Router"
        ]
    }
});