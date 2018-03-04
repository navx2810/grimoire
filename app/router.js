import VueRouter from "vue-router"
import Characters from "./components/characters"

const needsAuth = { auth: true }

const routes = [
    { path: "/characters", component: Characters }
]

export default new VueRouter({ routes })