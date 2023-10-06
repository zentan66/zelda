import Button from './Button.vue'

const Plugin = {}
Plugin.install = function (Vue, options) {
    Vue.component(Button.name, Button)
}

export default Plugin