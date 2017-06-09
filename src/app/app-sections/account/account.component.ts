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
  drop = false;
  constructor(private ps:AccountService) {
    this.user = this.ps.user;
  }

  onClickOutside(event:Object) {
      this.drop = false;
  }
  ngOnInit() { }

}