import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
	private getUsersUrl = 'http://localhost:3000/users';
	constructor(
		private http: Http 
	){}
	getUsers(): Observable<any> {

		return this.http.get(this.getUsersUrl) // ...using post request
		.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
		.catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

	} 
}