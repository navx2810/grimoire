import { ColorsService } from '../services/colors.service';
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
	selector: '[secondary]'
})
export class SecondaryDirective {

	constructor(private colorsSvc: ColorsService, private el: ElementRef, private render: Renderer) {
		render.setElementStyle(el.nativeElement, 'color', colorsSvc.secondary)
	}

}
