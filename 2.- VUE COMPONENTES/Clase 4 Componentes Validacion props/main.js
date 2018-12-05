Vue.component('candidato', {
    template: '#candidato-template',
    // props:['nombre', 'correoe','imagen'],
    props: {
        // Campo requerido
        'nombre' : {
            type: String,
            required: true
        },
        // Se puede pasar una matriz de varios tipos
        'correoe':  {
            type: [String, Array],
            default: "thisTest@gmail.com"
        },
        'imagen' : String,
        // valores por defauld de un objeto
        'location' : {
            type: Object,
            default() {
                return {
                    ciudad: "Mexico"
                }
            }
        },
        // Funcion para validar, si no cumple con la validacion mandara en consola un warning
        'genero' : {
            validator: function (sexo) {
                return sexo === 'male'
            }
        }
    },
    mounted(){
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
    mounted() {
        this.obtenerCandidatos();
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=100').then(
                response => {
                    this.candidatos = response.data.results
                }
            )
        }
    },
    data: {
        texto: "Test...",
        candidatos: []
    }
});