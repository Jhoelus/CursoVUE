<template>
  <div id="app">
      <h2>{{nombre}}</h2>
      <h2>{{ciudad}}</h2>
      <h2>{{apellidos}}</h2>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'app',
    // computed: {
    //   nombre () {
    //     return this.$store.state.nombre;
    //   }
    // }
    // computed: mapState ({
    //   nombre: function(state) {
    //     return state.nombre
    //   },
    //   ciudades: state => state.ciudad,
    //   nameCompleto (state){
    //     return state.nombre + ' ' + state.apellidos
    //   }
    // })
    computed: mapState (['nombre', 'ciudad', 'apellidos'])
  }
</script>

<style>

</style>
