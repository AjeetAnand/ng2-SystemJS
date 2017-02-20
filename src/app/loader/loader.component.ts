import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'page-loader',
	templateUrl: 'loader.component.html',
	styleUrls: []
})
export class PageLoader {
	isLoading: boolean = false;

	show(): void {
		this.isLoading = true;
	}
	hide(): void {
		this.isLoading = false;
	}
}
