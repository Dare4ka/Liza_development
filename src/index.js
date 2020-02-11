// JS
import './js/'

// SaSS
import './assets/sass/main.sass'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')


// Vue components (for use in html)
Vue.component('slider-component', require('./components/slider.vue').default)


// import VueAgile from 'vue-agile'
// Vue.use(VueAgile)
// Vue init
const app = new Vue({
  el: '#app'
})
console.log(Vue)