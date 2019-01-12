const eventBus = new Vue();

Vue.component('test',{
    template:"#test",
    data () {
        return {
            encabezado: "This Head"
        }
    },
    methods: {
        ejecutarAlgo(){
            this.$emit('exe')
        },
        ejecutarAlgo2(){
            eventBus.$emit('exe2', this.encabezado)
        }
    }
});
new Vue({
    el: 'main',
    data: {
        cabeza: "aaa"
    },
    created(){
        // this.$on("exe2", function (msg) {
            // console.log('caught in parent', msg)
        // })
        eventBus.$on("exe2", (encabezado) => {
            console.log(encabezado)
        })
    },
    methods: {
        decirHola(){
            console.log("decir Hola")
        }
    }
});