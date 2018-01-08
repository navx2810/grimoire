import { ColorVarianceDirective } from './directives/color-variance.directive';
import { ColorsService } from './services/colors.service';
import { SecondaryDirective } from './directives/secondary.directive';
import { PrimaryDirective } from './directives/primary.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { ScoresSkillsComponent } from './character-sheet/cs-scores-skills/scores-skills.component';
import { CsHeaderComponent } from './character-sheet/cs-header/cs-header.component';

@NgModule({
	declarations: [
		AppComponent,
		PrimaryDirective,
		SecondaryDirective,
		CharacterSheetComponent,
		CsHeaderComponent,
		ColorVarianceDirective,
		ScoresSkillsComponent,
	],
	imports: [
		BrowserModule
	],
	providers: [
		ColorsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
