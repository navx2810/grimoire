import VueFire from "vuefire"
import Vue from "vue"
import { db } from "./services/firebase"
import data from "./services/data"
import Vuetify from "vuetify"
import VueRouter from "vue-router"

// import BootstrapVue from "bootstrap-vue"
// import "bootstrap-vue/dist/bootstrap-vue.css"
// import "bootstrap/dist/css/bootstrap.min.css"

import App from "./components/app"

import "./main.styl"

import router from "./router"

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(Vuetify)

new Vue({
    el: "#app",
    data,
    router,
    firebase: {
        characters: db.ref('/characters')
    },
    render: h => h(App)
})