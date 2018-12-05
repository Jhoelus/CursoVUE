/*
*   Vanilla js
*/

const h1 = document.querySelector('h1');
const input = document.querySelector('input');

// input.addEventListener('keyup', function(){
//     h1.innerHTML = input.value;
// });

// input.addEventListener('keyup', () => 
//     h1.innerHTML = input.value
// );

/*
*   VUE.js
*/

// function addTarea () {
//     const inputTarea = document.getElementById("inputTarea")
//     VM.tareas.unshift(inputTarea.value);
//     inputTarea.value = ''; 
// }

const VM = new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola Vue ..!!',
        conectado: false,
        edad: 14,
        dias: ["Lun","Mar","Mier","Jue","Vier","Sab","Dom"],
        tareas: ["tarea1","tarea2","tarea3"],
        persona: {
            nombre: "Jhoel",
            apellido: "Hernan",
            edad: 25
        },
        nuevaTarea: null
    },
    methods: {
        addTarea () {
           this.tareas.push(this.nuevaTarea);
           this.nuevaTarea = "";
        }
    }
});