import Vue from 'vue'
import App from './App.vue'
import zelda from 'zeald'

Vue.use(zelda)

new Vue({
    el: '#app',
    render: h => h(App)
})