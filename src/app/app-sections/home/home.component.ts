import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.component.html',
	styleUrls: ['../../shared/styles/content-topbar.css']
})

export class HomeComponent implements OnInit {
	homeTabsData = [
		{
			"title": "Overview",
			"link" : "/"
		},
		{
			"title": "Week Plan",
			"link" : "/week-plan"
		},
		{
			"title": "Today",
			"link" : "/today"
		},
		{
			"title": "More",
			"link" : "/wer"
		},
	];
	pageTitle = "Week Tweak"
	drop = false;
	date;
	ngOnInit() {
		
	 }
	onClickOutside(event:Object) {
    	this.drop = false;
	}
	showTime(){
		this.date = new Date();
		setInterval(()=> this.date = new Date(), 1000);		
	}
}