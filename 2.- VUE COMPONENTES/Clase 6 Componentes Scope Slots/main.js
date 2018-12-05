Vue.component('mis-tareas', {
    props: ['listado'],
    template: '#mis-tareas-template',
    created(){
    }, 
    data () {
        return {
        }
    },
    computed: {
    }
})
new Vue({
    el: "main",
    data: {
        tareas:[
            { titulo: "Salir a correr 1" },
            { titulo: "Salir a correr 2" },
            { titulo: "Salir a correr 3" },
            { titulo: "Salir a correr 4" },
            { titulo: "Salir a correr 5" }
        ]
    }
});