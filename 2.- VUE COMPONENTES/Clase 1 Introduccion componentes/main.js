// Directivas condicioneales VUE
Vue.component('mis-tareas', {
    props: ['tareas'],
    template:`<ul><li v-for="tarea in tareasGet"> {{tarea.title}}</li></ul>`,
    data() {
        return {
            texto: "Test...",
            tareasGet: [],
            tareasLocales: [
                {title: "Tarea Local 2"},
                {title: "Tarea Local 1"},
                {title: "Tarea Local 3"}
            ]
        }
    },
    mounted () {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            (repuesta) => this.tareasGet = repuesta.data
        )
    }
});

const vm = new Vue({
    el: "main",
    // data: {
    //     texto: "Test...",
    //     tareasGet: [],
    //     tareasLocales: [
    //         {title: "Tarea Local 2"},
    //         {title: "Tarea Local 1"},
    //         {title: "Tarea Local 3"}
    //     ]
    // },
    // mounted () {
    //     axios.get('https://jsonplaceholder.typicode.com/todos').then(
    //         repuesta => this.tareasGet = repuesta.data
    //     )
    // }
});