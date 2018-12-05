Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
            <section class="alerta" :class="[tipo,posicion]">
                <header class="alerta__header">
                    <a href="#" @click="ocultarAlerta">cerrar</a>
                    <slot name="header" :headPropiedad="head">Hola</slot>
                </header>
                <div class="alerta__contenido">
                        <slot>
                            This contenido XXXXXXXXXXXXXXXXXXXXXXXX
                        </slot>
                </div>
                <footer class="alerta__footer">
                    <slot name="footer">Txt footer </slot>
                </footer>
            </section>`,
    created(){
    }, 
    data () {
        return {
            head : "txt Head"
        }
    },
    methods:{
        ocultarAlerta () {
            this.$emit('ocultar')
        }
    },
    computed: {
    }
})
new Vue({
    el: "main",
    data: {
        mostrarExito: false,
        mostrarError: false
    }
});