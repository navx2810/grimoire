import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<div grmColorVariance>
			<grm-character-sheet></grm-character-sheet>
		</div>
	`,
	styles: []
})
export class AppComponent {
	title = 'app';
}
