import Vue from 'vue'
import App from './App.vue'
// import datePicker from './plugins/date-picker'
import {store} from "./store/store.js"

// Vue.use(datePicker)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
