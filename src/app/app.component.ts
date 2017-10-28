import { Component } from '@angular/core';
import { CharactersService } from "./characters.service"

@Component({
  selector: 'app-root',
  templateUrl: "./app.html",
  styles: []
})
export class AppComponent {

  constructor(public characterService: CharactersService) {
  }

  title = 'app';

  get characters() {
    return this.characterService.characters
  }
}
