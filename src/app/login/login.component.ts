import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { LoginService } from './login.service';

@Component({
	moduleId: module.id,
	selector: 'my-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css'],
	providers: [LoginService]
})
export class MyLoginComponent {

	email: string;
	password: string;
	loginError: string;
	constructor(
  	private loginService: LoginService,
  	private router: Router
  ){}

	login(): any {
		let loginData = {email: this.email, password: this.password}
		this.loginService.login(loginData).subscribe(res => {
			//console.log(res);
			window.sessionStorage.setItem('token', res.token);
			this.router.navigateByUrl('/users');
		}, err => {
			this.loginError = err;
		});
	}
}