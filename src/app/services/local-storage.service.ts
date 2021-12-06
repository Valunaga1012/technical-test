import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor() { }

	create(name, value): void {
		window.localStorage.setItem(name, JSON.stringify(value));
	}

	getItem(name) {
		return JSON.parse(localStorage.getItem(name));
	}

	removeItem(name): void {
		localStorage.removeItem(name);
	}

	clear(): void {
		return window.localStorage.clear();
	}

}
