import { Injectable } from '@angular/core';
import * as firebase from "firebase"

@Injectable()
export class RepoService {

  public db: firebase.database.Database;
  public auth: firebase.auth.Auth;

  constructor() {
    const fb = firebase.initializeApp({
      apiKey: "AIzaSyDu24ur6fHckUQ6W8UE0EM0UrFWw2EhhG0",
      authDomain: "grimoire-53fec.firebaseapp.com",
      databaseURL: "https://grimoire-53fec.firebaseio.com",
      projectId: "grimoire-53fec",
      storageBucket: "grimoire-53fec.appspot.com",
      messagingSenderId: "20151316343"
    })

    this.db = fb.database()
    this.auth = fb.auth()
  }

}
