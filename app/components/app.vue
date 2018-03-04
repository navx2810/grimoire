<template lang="pug">
    v-app
        link(href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet")
        v-navigation-drawer(app fixed v-model="drawer")
            v-toolbar(flat)
                v-toolbar-title Navigation
            v-list
                v-list-tile
                    v-btn(flat to="/" active-class="blue--text") Home
                v-list-tile
                    v-btn(flat to="characters" active-class="blue--text") Characters
                v-list-tile
                    v-btn(flat disabled) Vault
                v-list-tile
                    v-btn(flat disabled) Journal
        v-toolbar(fixed app)
            v-toolbar-side-icon(@click="drawer=!drawer")
            v-toolbar-title Grimoire
            v-spacer
            v-toolbar-items
                v-menu(offset-y v-if="!isSignedIn")
                    v-btn(flat slot="activator") Account
                    v-list()
                        v-list-tile
                            v-btn(@click="login = true" flat) Login
                        v-list-tile
                            v-btn(flat) Create
                v-menu(offset-y v-if="isSignedIn")
                    v-btn(flat slot="activator") {{displayName}}
                    v-list()
                        v-list-tile
                            v-btn(flat disabled) Options
                        v-list-tile
                            v-btn(@click="logout" flat color="error") Logout
                
        v-content
            v-dialog(v-model="login" persistant max-width="500px")
                Login(v-model="login")
            router-view
            
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import Login from "./login"

import { auth } from "../services/firebase.js"
import data from "../services/data"

@Component({
    name: "App",
    props: [],
    components: { Login },
})
export default class extends Vue {
    drawer = false
    login = false
    create = false

    get isSignedIn() { return data.user !== null }

    get displayName() { return auth.currentUser.displayName }

    async logout() {
        await auth.signOut()
        console.info(auth.currentUser)
    }
}
</script>
