<template>
    <div>
        <h3>{{tareasCompletadas}} tareasCompletadas</h3>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        // tareasCompletadas() {
        //     // return this.$store.state.tareas.filter((tarea) => {
        //     //         return tarea.completado
        //     //     }
        //     // ).length
        //     return this.$store.getters.tareasCompletadas
        // },
        ...mapGetters(['tareasCompletadas'])
    }
}
</script>

