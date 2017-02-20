import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { UserService } from './user.service';
import { Constant } from "../app.constant";

import { UserService } from './user.service';

@Component({
	moduleId: module.id,
	selector: 'user-list',
	templateUrl: 'user.component.html',
	styleUrls: [],
	providers: [Constant, UserService]
})
export class UserComponent implements OnInit{

	public users: any = [];

	constructor(
		private userService: UserService,
		private router: Router
	){}

	getUsers(): any {
		this.userService.getUsers().subscribe(res => {
			console.log(res);
			this.users = res;
		});
	}

	ngOnInit(): void {
		if ( ! window.sessionStorage.getItem('token') )
			this.router.navigateByUrl('/login');
    this.getUsers();
  }

  alert(): void {
  	window.alert('hello');
  }
}