import firebase from "firebase"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC_ENjuleHGqkVqXVzhDjLy2DPBy_cbrYY",
    authDomain: "grimoire-b8327.firebaseapp.com",
    databaseURL: "https://grimoire-b8327.firebaseio.com",
    projectId: "grimoire-b8327",
    storageBucket: "grimoire-b8327.appspot.com",
    messagingSenderId: "1043995470260"
})

const db = app.database()
const auth = app.auth()

const fbProvider = new firebase.auth.FacebookAuthProvider()
fbProvider.addScope('email')
fbProvider.setCustomParameters({
    'display': 'popup'
})

export { app, db, auth, fbProvider }
