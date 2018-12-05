// Filtros VUE
Vue.filter('mensajeAlReves',(valor) => valor.split('').reverse().join(''))

new Vue({
    el: "main",
    data: {
        texto: "Test...",
        minimo: 5,
        busqueda: "",
        juegos: [
            { titulo: "Battlefield", genero: "FPS", puntuacion: 9},
            { titulo: "Civil VI", genero: "Estrategia", puntuacion: 10},
            { titulo: "Resident", genero: "Horror", puntuacion: 7}
        ]
    },
    computed: {
        mejoresJuegos(){
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo)
        },
        buscarJuego() {
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda))
        }
    }
});