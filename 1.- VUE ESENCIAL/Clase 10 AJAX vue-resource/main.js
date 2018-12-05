// Directivas condicioneales VUE
const vm = new Vue({
    el: "main",
    data: {
        texto: "Test...",
        personas: []
    },
    mounted () {
        this.cargarPersonas()
    },
    methods: {
        cargarPersonas() {
            this.$http.get('https://randomuser.me/api/?results=5').then((respuesta) => {
                this.personas = respuesta.body.results
            });
        }
    }
});