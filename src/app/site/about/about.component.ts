import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
	selector: 'site-about',
	templateUrl: 'about.component.html',
	styleUrls:['about.component.css']
})

export class AboutComponent implements OnInit {
	loggedin = false;
	error: any;
	userName;
  	constructor(public afa: AngularFireAuth) {

		this.afa.authState.subscribe(auth => { 
			if(auth) { 
				this.loggedin = true;
				this.userName = auth.displayName;
			}
			
		});
  }
	ngOnInit() { }
}