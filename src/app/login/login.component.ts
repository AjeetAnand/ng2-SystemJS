import { Component } from '@angular/core';

import { LoginService } from './login.service';

@Component({
	moduleId: module.id,
	selector: 'my-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css']
})
export class MyLoginComponent {

	email: string;
	password: string;
	constructor( loginServices: LoginService ) {
		console.log(loginService);
	}

	login(): any {
		console.log(this.email, this.password);
	}
}