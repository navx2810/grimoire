import { Injectable } from '@angular/core';
/**
 * A service for handling color changes and themes throughout the application.
 * Use the < primary> and < secondary> attributes to handle the swaps 
 * 
 * @export
 * @class ColorsService
 */
@Injectable()

export class ColorsService {

	primary: string = "red"
	secondary: string = "#444"
	bg: string = "#fff"

	constructor() { }

}
