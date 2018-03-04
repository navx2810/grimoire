<template lang="pug">
    v-card
        v-card-text
            h2 Login
            v-form(ref="form" v-model="valid")
                v-text-field(
                    label="Email"
                    v-model="email"
                    type="email"
                    required
                ) 
                v-text-field(
                    label="Password"
                    v-model="password"
                    type="password"
                    required
                ) 
            h3.mb-3 Other Options
            div
                v-btn(@click="loginWithFB()" class="fb") Facebook
        v-card-text(v-if="errors.length")
            v-list
                v-list-tile
                    p(v-for="err in errors" :key="err").error--text {{err}}
        v-divider
        v-card-actions()
            v-btn(flat color="success" @click="login") Login
            v-btn(flat color="error" @click="clear") Clear
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { auth, fbProvider } from "../services/firebase"

@Component({
    name: "Login",
    props: ["value"],
    components: {}
})
export default class extends Vue {
    valid=null
    password=""
    email=""
    errors = []

    async login() {
        try {
            this.errors = []
            const res = await auth.signInWithEmailAndPassword(this.email, this.password)
            this.$emit('input', false)
        } catch(e) { this.displayErrors(e) }
    }

    async loginWithFB() {
        try {
            this.errors = []
            const res = await auth.signInWithPopup(fbProvider)
            this.$emit('input', false)
        } catch(e) { this.displayErrors(e) }
    }

    clear() {
        this.email = ""
        this.password = ""
        this.errors = []
    }

    displayErrors({ message }) {
        this.errors.push(message)
    }
}
</script>

<style lang="stylus" scoped>
.fb
    background #3B5998!important
    color #fff
</style>

