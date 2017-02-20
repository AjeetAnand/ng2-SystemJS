import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
	moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  name = 'Angular';
  headers = {
  	isLoginPage: true,
  	isProfilePage: false,
  };
  
  constructor(router:Router) {
	  router.events.forEach((event) => {
	    if(event instanceof NavigationStart) {
	    	console.log('NavigationStart', event);
	    }
	    if(event instanceof NavigationEnd) {
	    	console.log('NavigationEnd', event);
	    	if (event.urlAfterRedirects == '/users') {
  				this.setHeader(['isProfilePage']);
	    	}
	    	if (event.urlAfterRedirects == '/login') {
  				this.setHeader(['isLoginPage']);
	    	}
	    }
	    // NavigationCancel
	    // NavigationError
	    // RoutesRecognized
	  });
	}

	setHeader(activeHeader): void {
		for (let key in this.headers) {
			this.headers[key] = false;
		}
		for (let key of activeHeader) {
			this.headers[key] = true;
		}
	}
}
