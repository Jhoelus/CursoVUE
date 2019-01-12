<template>
    <div>
      <h1>Contador: {{ cantidad }}</h1>
      <!-- Para llamar mutation directamente 
          <button @click="aumentar">Aumentar</button>
      <button @click="reducir">Reducir</button> -->
      <!-- Para llamar mutation a traves de action -->
      <button @click="aumentarAsinc(5)">Aumentar</button>
      <button @click="reducirAsinc({minus:2})">Reducir</button>
    </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    computed: mapState(['cantidad']),
    methods:{
        ...mapMutations(['aumentar', 'reducir']),
        ...mapActions(['aumentarAsinc', 'reducirAsinc'])
    }
    //{
        // aumentar (){
        //     // this.$store.commit('aumentar')
        /*
            Para las acciones ocupamos
            this.$store.dispatch('aumentarAsinc')  
        */
        // },
        // reducir (){
        //     // this.$store.commit('reducir')
        // }
    //}
}
</script>
<style>

</style>

