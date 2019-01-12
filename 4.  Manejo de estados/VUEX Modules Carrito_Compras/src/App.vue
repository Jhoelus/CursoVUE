<template>
  <div id="app">
    <!-- <contador :cantidad="cantidad"
        @aumentar="cantidad++"
        @reducir="cantidad--"></contador> -->

        <contador></contador>
  </div>
</template>

<script>
  import contador from "./components/contador.vue"
  export default {
    name: 'app',
    components:{
      contador
    },
    created() {
      console.log('creandi')
    },
    data () {
      return {  
        cantidad : 0
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
