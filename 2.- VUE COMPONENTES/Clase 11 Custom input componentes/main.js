Vue.component('contrasena', {
    props: ["contrasena"],
    template:`<input :value="contrasena" @input="validarPassword($event.target.value)" ref="password">`,
    data() {
        return {
            novalidas: ["1234","root","admin"]
        }
    },
    methods: {
        validarPassword (pass) {
            if(this.novalidas.includes(pass)){
                this.$refs.password.value = (pass = '')
            }
            this.$emit('input', pass)
        }
    }
});

new Vue({
    el: "main",
    data: {
        contrasena: "algo"
    }
});