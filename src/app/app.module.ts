import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CharactersService } from "./characters.service"
import { RepoService } from "./repo.service"

import { AppComponent } from './app.component';
import { CharacterInfoComponent } from './character-info/character-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CharactersService, RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
