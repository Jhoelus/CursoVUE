// Directivas condicioneales VUE
const vm = new Vue({
    el: "main",
    data: {
        texto: "Test...",
        completadas: 0,
        tareas: [
            { 
                titulo: "Hacer compras" ,
                completado: false 
            },
            {
                titulo: "Aprender Vue" ,
                completado: false 
            },
            {
                titulo: "Aprender Firebase" ,
                completado: false 
            },
            {
                titulo: "Dominar ES6" ,
                completado: false 
            },
            {
                titulo: "Salir a correr" ,
                completado: false 
            }
        ]
    },
    methods: {
        completarTareas(tarea) {
            tarea.completado = !tarea.completado
        }
    },
    computed: {
        tareasCompletadas(){
            return this.tareas.filter(tarea => tarea.completado === true)
        }
    }
});