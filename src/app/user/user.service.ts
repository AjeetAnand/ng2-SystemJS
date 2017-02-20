import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Constant } from "../app.constant";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  private getUsersUrl: string;
  constructor(
    private http: Http,
    private constant: Constant
  ) {
  	this.getUsersUrl = constant.basePath + 'users';
  }
  getUsers(): Observable < any > {

    let headers = new Headers({ 'x-access-token': window.sessionStorage.getItem('token') }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.getUsersUrl, options) // ...using post request
      .map((res: Response) => { 
      	console.log(res); 
      	return res.json();
      }) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error && error.json() || 'Server error')); //...errors if any

  }
}
