<template>
  <div id="app">
    <tareas></tareas>
    <tareasRes></tareasRes>
  </div>
</template>

<script>
  import tareas from './components/Tareas.vue'
  import tareasRes from './components/TareasRestantes.vue'
  export default {
    name: 'app',
    components:{
      tareas,
      tareasRes
    },
    created() {
    },
    data () {
      return {  
      }
    },
    methods: {
    },
    watch: {
    }
  }
</script>

<style>

</style>
