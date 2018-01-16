import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ColorVarianceDirective } from './directives/color-variance.directive';
import { ColorsService } from './services/colors.service';
import { SecondaryDirective } from './directives/secondary.directive';
import { PrimaryDirective } from './directives/primary.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { ScoresSkillsComponent } from './character-sheet/cs-scores-skills/scores-skills.component';
import { CsHeaderComponent } from './character-sheet/cs-header/cs-header.component';
import { UserService } from './services/user.service';
import { AuthComponent } from './components/auth/auth.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCreatorComponent } from './component/character-creator/character-creator.component';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'character', component: CharacterSheetComponent },
	{ path: 'auth', component: AuthComponent },
	{ path: 'characters' , children: [
		{ path: 'list', component: CharacterListComponent },
		{ path: 'create', component: CharacterCreatorComponent },
		{ path: 'new', redirectTo: 'create', pathMatch: 'full' },
		{ path: '**', redirectTo: "list" },
	]}
]

@NgModule({
	declarations: [
		AppComponent,
		PrimaryDirective,
		SecondaryDirective,
		CharacterSheetComponent,
		CsHeaderComponent,
		ColorVarianceDirective,
		ScoresSkillsComponent,
		LoginComponent,
		AuthComponent,
		CharacterListComponent,
		CharacterCreatorComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(routes, { enableTracing: false })
	],
	providers: [
		ColorsService,
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
