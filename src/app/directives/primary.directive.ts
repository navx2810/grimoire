import { ColorsService } from '../services/colors.service';
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
	selector: '[primary]'
})
export class PrimaryDirective {

	constructor(private colorsSvc: ColorsService, private el: ElementRef, private render: Renderer) {
		render.setElementStyle(el.nativeElement, 'color', colorsSvc.primary)
	}

}
