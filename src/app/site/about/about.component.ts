import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
	selector: 'site-about',
	templateUrl: 'about.component.html',
	styleUrls:['about.component.css']
})

export class AboutComponent implements OnInit {
	loggedin = false;
	error: any;
	userName;
  	constructor(public af: AngularFire) {

		this.af.auth.subscribe(auth => { 
			if(auth) { 
				this.loggedin = true;
				this.userName = auth.auth.displayName;
			}
			
		});
  }
	ngOnInit() { }
}