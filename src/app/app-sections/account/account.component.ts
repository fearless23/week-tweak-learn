import { Component } from '@angular/core';
import {AccountService} from './account.service';

declare var firebase: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css', '../../shared/styles/content-topbar.css'],
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
  b='`s Account';
  user;
  userName;
  drop = false;

  constructor(private as:AccountService) {
    this.user = this.as.user;
    this.userName = this.as.userName;
    console.log(this.userName+"com");
  }

  onClickOutside(event:Object) {
      this.drop = false;
  }
  
  ngOnInit() { }

}