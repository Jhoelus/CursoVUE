<template>
  <div id="app">
    <elemento tipo="h1">Hola</elemento>
    <elemento tipo="h3">Hola</elemento>
  </div>
</template>

<script>
  import elemento from "./components/Elemento.vue"
  export default {
    name: 'app',
    components:{
      elemento
    },
    data () {
      return {  
      }
    }
  }
</script>

<style>

</style>
