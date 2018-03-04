import { auth } from "./firebase"

export default new class {

    user = null

    constructor() {
        auth.onAuthStateChanged(user => this.user = user)
    }

}