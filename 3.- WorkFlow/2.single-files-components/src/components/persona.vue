<template>
    <div>
        <template v-if="persona">
            <h1 v-text="datosPerson.correo"></h1>
            <h2 v-text="datosPerson.nombre"></h2>
            <img :src="datosPerson.foto">
        </template>
        <span v-else>Cargando person....</span>
    </div>
</template>
    
<script>
    import axios from 'axios';
    
    export default {
        mounted () {
            axios.get('https://randomuser.me/api/').then( response => {
                this.persona = response.data.results[0]
            })
        },
        data() {
            return {
                persona: null
            }
        },
        computed: {
            datosPerson() {
                return{
                    nombre:`${this.persona.name.first} ${this.persona.name.last}`,
                    foto: this.persona.picture.large,
                    correo: this.persona.email
                }

            }
        }
    }
</script>

<style>

</style>
