import { Component, OnInit } from '@angular/core';
import { AddStuffService }  from './../add-stuff.service';
import { Router }           from '@angular/router';

@Component({
    selector: 'app-add-step',
    templateUrl: 'add-step.html'
})

export class AddStepComponent implements OnInit {

  step;
  projects;
  userId;

  stepTitle: String;
  stepSummary: String;
  projectKey: String;

  constructor(private ass: AddStuffService, private router: Router) {}

  ngOnInit() {
    this.userId = this.ass.userId;
    this.projects = this.ass.projectsDatabase;
  }

  addStep(a, b, c) {

    this.step = {
      'title': a,
      'summary': b,
      'projectKey': c,
      'dateAdded': new Date().getTime(),
      'dueDate': new Date().setMonth(new Date().getMonth() + 3 ),
      'numOfTasks': 0,
      'progress': 0,
    };

    this.ass.stepsDatabase.push(this.step);
  };
}
