// Directivas condicioneales VUE
Vue.prototype.$http = axios;

new Vue({
    el: "main",
    data: {
        texto: "Test...",
        personas: []
    },
    mounted () {
        this.cargarPersonas()
        this.cargarPersonasVueResouce()
    },
    methods: {
        cargarPersonas() {
            axios.get('https://randomuser.me/api/?results=5').then((respuesta) => {
                this.personas = respuesta.data.results
            });
        },
        cargarPersonasVueResouce() {
            this.$http.get('https://randomuser.me/api/?results=5').then((respuesta) => {
               console.log(respuesta.data.results)
            });
        }
    }
});