import { ColorsService } from '../services/colors.service';
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[grmColorVariance]'
})
export class ColorVarianceDirective {

  constructor(private colorsSvc: ColorsService, private el: ElementRef, private render: Renderer) {
	  document.querySelector('body').style.cssText = "--primary: #948939";
  }

}
