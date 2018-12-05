const eventBus = new Vue();

Vue.component('listado-productos', {
    props: ['productos'],
    template: `
            <section>
                <ul>
                    <li v-for="producto in productos">
                        {{producto.nombre}} - <small> $ {{ producto.precio.toFixed(2) }} </small>
                        <button @click="eliminarProducto(producto.precio)">-</button>
                        <button @click="anadirProducto(producto.precio)">+</button>
                    </li>
                </ul>
            </section>`,
    created(){
    }, 
    data () {
        return {
            head : "txt Head"
        }
    },
    methods:{
        eliminarProducto (precio) {
            eventBus.$emit('removeProduct', precio)
        },
        anadirProducto (precio) {
            eventBus.$emit('addProduct', precio)
        }
    },
    computed: {
    }
})

Vue.component('carrito-compra', {
    template: `
        <section>
            <h1> Total: $ {{ total.toFixed(2)}} </h1>
            <h3> Cantidad de productos: {{ cantidadProductos}} </h3>
        </section>`,
    data () {
        return {
            cantidadProductos: 0,
            total: 0
        }
    },
    created() {
        eventBus.$on('addProduct', (precio) => {
            if (this.total > 0) {
                this.total += precio
                this.cantidadProductos++
            }
        }),
        eventBus.$on('removeProduct', (precio) => {
            if(this.cantidadProductos > 0) {
                this.cantidadProductos--
                this.total -= precio
            }
        })
    }
})
new Vue({
    el: "main",
    data: {
        productos: [
            {nombre:"Book ES6", precio:39},
            {nombre:"Portatil", precio:1300},
            {nombre:"Cafe", precio:2},
            {nombre:"Auriculares", precio:80},
            {nombre:"Moleskine", precio:19}
        ]
    }
});