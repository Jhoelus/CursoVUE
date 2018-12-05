Vue.component('autor', {
    template: `
        <div>    
            <h3>{{nombre}}</h3>
            <h5>{{edad}}</h5>
        </div>    `,
    props:['nombre', 'edad'],
    mounted(){
    }, 
    data () {
        return {
            edadLocal: this.edad,
            nameLocal: this.nombre
        }
    },
    computed: {
        upperName() {
            return this.nombre.toUpperCase()
        }
    }
})
const vm = new Vue({
    el: "main",
    data: {
        texto: "Test...",
        autor: 'Jhoel Hernandez',
        edad: 100
    }
});