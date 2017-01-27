import { Component, OnInit } from '@angular/core';
import { MyProjectService }  from './../my-project.service';
import { Router }           from '@angular/router';

@Component({
	selector: 'add-step',
	templateUrl: 'add-step.component.html'
})

export class AddStepComponent implements OnInit {
	db;
  	step;
	projectKey;
  	userId;
  	modalState=false;

  	constructor(private mps: MyProjectService, private router: Router) {
    	this.db = mps.stepsDb;
    	this.userId = mps.userId;
		this.projectKey = mps.id;
	}

	addStep(a,b) {
    	this.step = {"title": a, "summary": b, "projectKey": this.projectKey, "dateAdded": new Date().getTime()};
      	this.db.list('/users/'+this.userId+'/steps').push(this.step);
	};

	ngOnInit() { }
}