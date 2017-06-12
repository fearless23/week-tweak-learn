import { Component, OnInit } from '@angular/core';
import { AccountService }    from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountService]
})

export class AccountComponent {

  tabsData = [
		{
			"title": "Account",
			"link" : "./"
		},
		{
			"title": "Profile",
			"link" : "./profile"
		},
		{
			"title": "Settings",
			"link" : "./settings"
		}
	];

  pageTitle;
  drop = false;

  constructor(private as:AccountService) {}

  ngOnInit() {
    this.pageTitle = this.as.userName+'`s Account';
  }

  onClickOutside(event:Object) {
    this.drop = false;
  }
  
  

}