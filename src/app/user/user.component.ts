import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
	moduleId: module.id,
	selector: 'user-list',
	templateUrl: 'user.component.html',
	styleUrls: [],
	providers: [UserService]
})
export class UserComponent implements OnInit{

	public users: any = [];

	constructor(
		private userService: UserService
	){}

	getUsers(): any {
		this.userService.getUsers().subscribe(res => {
			console.log(res);
			this.users = res;
		});
	}

	ngOnInit(): void {
    this.getUsers();
  }
}