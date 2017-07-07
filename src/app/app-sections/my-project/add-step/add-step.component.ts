import { Component, OnInit } from '@angular/core';
import { MyProjectService }  from './../utilities/my-project.service';
import { Router }           from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-step',
  templateUrl: 'add-step.component.html'
})

export class AddStepComponent implements OnInit {
  step;
  projectKey;
  userId;

  title: String;
  summary: String;

  constructor(private mps: MyProjectService, private router: Router) {}

  ngOnInit() {
    this.userId = this.mps.userId;
    this.projectKey = this.mps.projectKeyFromRoute;
  }

  addStepTitle(a) {

    this.step = {
      'title': a,
      'summary': 'No summary. Please Add One',
      'projectKey': this.projectKey,
      'dateAdded': new Date().getTime(),
      'dueDate': new Date().setMonth(new Date().getMonth() + 3 ),
      'numOfTasks': 0,
      'progress': 0,
    };

    this.mps.stepsDatabase.push(this.step);
  };

}
