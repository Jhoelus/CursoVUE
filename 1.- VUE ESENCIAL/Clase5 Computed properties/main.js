// Directivas condicioneales VUE
const vm = new Vue({
    el: "main",
    data: {
        texto: "Test...",
        msg: "Hola",
        tareas: [
            {name: 'Hacer com', prioridad: true, antiguedad: 23},
            {name: 'Aprender VUE', prioridad: true, antiguedad: 123},
            {name: 'Ir al gimnasio', prioridad: false, antiguedad: 300}
        ],
    }, 
    computed: {
        mensajeAlReves() {
            return  this.msg.split('').reverse().join('')
        },
        tareasConPrioridad(){
            return this.tareas.filter((tarea) => tarea.prioridad)
        },
        tareasPorAntiguedad(){
            // Menor que 0 primero A
            // Mayor que 0 primero B
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad)
        }
    }
});