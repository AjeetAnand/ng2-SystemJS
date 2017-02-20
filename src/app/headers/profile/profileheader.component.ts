import { Component } from "@angular/core";
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'profile-header',
	templateUrl: 'profileheader.component.html',
	styleUrls: []
})

export class ProfileHeader {

	constructor(
		private router: Router
	) {

	}

	logout(): void {
		window.sessionStorage.setItem('token', '');
		this.router.navigateByUrl('/login');
	}
}
