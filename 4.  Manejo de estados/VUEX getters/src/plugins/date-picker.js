export default {
    install(Vue, options) {
        Vue.prototype.$log = {
            info: (text) => console.info(text),
            error: (text) => console.error(text),
            debug: (text) => console.log(text),
            warn: (text) => console.warn(text)
        }
    }
}