// Directivas condicioneales VUE
const vm = new Vue({
    el: "main",
    data: {
        dias: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
        tareas: [
            {name: 'Hacer com', prioridad: 'baja'},
            {name: 'Aprender VUE', prioridad: 'alta'},
            {name: 'Ir al gimnasio', prioridad: 'alta'}
        ],
        persona: {
            nombre: 'Juan',
            profesion: 'Dev',
            ciudad: 'Mex'
        },
        personas: [
            {
                nombre: 'Juan',
                profesion: 'Dev',
                ciudad: 'Mex'
            },
            {
                nombre: 'Israel',
                profesion: 'Dev',
                ciudad: 'TIJ'
            }
        ]
    }
});