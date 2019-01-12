<template lang="pug">
    .row
      .col-sm-12
        input(type='text',readonly @focus='showCalendar = true', v-model='configCalendar.regularDate')
        transition(name='calendar-fade')
          date-picker(@close='showCalendar = false', v-if='showCalendar', v-model='configCalendar.regularDate', :min="configCalendar.min", :max="configCalendar.max", color="rgba(4, 98, 64, 0.7)")
</template>

<script>
import DatePicker from 'vue-md-date-picker'
import moment from 'moment'

export default {
  components: {
    'date-picker': DatePicker
  },
  data () {
    return {
      showCalendar: false
    }
  },
  props: ['labelFecha', 'configCalendar'],
  created () {
    console.log(this.configCalendar)
  },
  computed: {
    obtenerName: function () {
      return (this.labelFecha !== undefined && this.labelFecha.length > 0) ? this.labelFecha : this.nameCalendar
    }
  },
  methods: {
  }
}
</script>
<!-- table-complete-1.vue -->

<style scoped>

</style>
