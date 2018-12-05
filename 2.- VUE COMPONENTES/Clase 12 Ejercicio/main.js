Vue.component('usuarios', {
    template: '#usuarios-template',
    data() {
        return {
            usuarios: [],
            busqueda: ''
        }
    },
    mounted () {
        this.obtenerUsuarios()
    },
    computed: {
        filtrarBusqueda () {
            return this.usuarios.filter(user => {
                return user.nombre.includes(this.busqueda)
            })
        }
    },
    methods: {
        obtenerUsuarios(){
            axios.get('https://randomuser.me/api/?results=100').then((response) => {
                const listado = response.data.results.map((usuario) => {
                    return {
                        nombre: `${usuario.name.title}` + ' '+ `${usuario.name.first}` + ' ' +`${usuario.name.last}`,
                        correoe: usuario.email,
                        foto: usuario.picture.medium
                    }
                })
                this.usuarios = listado
            });
        }
    }
});

Vue.component('usuario', {
    props: ["user"],
    template: '#user-template',
})

new Vue({
    el: "main"
});