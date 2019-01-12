<template>
  <div id="app">
    <person></person>
    <person></person>
    <person></person>
    <person></person>
    <person></person>
    <person></person>
  </div>
</template>

<script>
  import person from './components/persona.vue'
  
  export default {
    name: 'app',
    components:{
      person
    },
    data () {
      return {
      }
    }
  }
</script>

<style>

</style>
