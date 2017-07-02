import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']  
})

export class ProfileComponent {

  profileTabsData = [
		{
			"title": "Overview",
			"link" : "/profile"
		},
		{
			"title": "Energy",
			"link" : "/profile/energy"
		}
	];

  pageTitle= "Profile";
  
  constructor() {}

  ngOnInit() {}

}