import { Component, OnInit } from '@angular/core';
import { SettingsService }    from './settings.service';

@Component({
  selector: 'app-account',
  templateUrl: './settings.component.html',
  providers: [SettingsService]
})

export class SettingsComponent {

  tabsData = [
		{
			"title": "Basic",
			"link" : "./"
		},
		{
			"title": "More",
			"link" : "./more"
		}
	];

  pageTitle = 'Settings';
  drop = false;

  constructor(private ss:SettingsService) {}

  ngOnInit() {}

  onClickOutside(event:Object) {
    this.drop = false;
  }
  
  

}