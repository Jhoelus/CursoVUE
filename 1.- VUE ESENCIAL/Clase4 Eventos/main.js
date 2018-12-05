// Eventos VUE
const vm = new Vue({
    el: "main",
    data: {
        texto: "",
        tareas: [
            'VUE',
            'ES&',
            'Publicar'
        ]
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift(this.texto)
            this.texto = ""
        }
    }
});

// Eventos con JavaScript
// function agregarTarea() {
//     const input = document.querySelector('input[type=text]')
//     vm.tareas.unshift(input.value);
//     input.value = '';
// }

