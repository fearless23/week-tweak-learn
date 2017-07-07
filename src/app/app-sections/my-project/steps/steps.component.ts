import { Component, OnInit } from '@angular/core';
import { MyProjectService }  from '../utilities/my-project.service';

@Component({
  selector: 'app-project-steps',
  templateUrl: './steps.html',
  styleUrls: ['./steps.css']
})

export class ProjectStepsComponent implements OnInit {
  myProjectKey;
  userId;

  steps;
  initialStepKey;

  stepKey;
  selectedStep;
  tasksInStep;
  hello;
  task;
  taskdone = true;
  completedTasksLength;
  percentageOfStepDone;

  dropStepSelector = false;
  stepWindowDropdown = false;

  onClickOutsideStepSelector(event: Object) {
    this.dropStepSelector = false;
  }
  onClickOutsideStepWindowDropdown(event: Object) {
    this.stepWindowDropdown = false;
  }

  constructor( private mps: MyProjectService) {}

  ngOnInit() {
    this.myProjectKey = this.mps.projectKeyFromRoute;
    this.userId = this.mps.userId;

    this.steps = this.mps.steps;

    // Set a step as initial/default
    this.steps.subscribe(data =>  {
      if (data.length > 0) {
        this.initialStepKey = data[0].$key;
        this.setStepId(this.initialStepKey);
      }
    });
  }


  setStepId(key) {
    this.stepKey = key;
    this.selectedStep = this.getaStep(key);
    this.tasksInStep = this.getTasksinStep(key);
    this.completion(this.tasksInStep);
  }

  getTasksinStep(x) {
    return this.mps.db.list('users/' + this.userId + '/tasks', {
          query: {
            orderByChild: 'stepKey',
            equalTo: x
          }
        });
  }

  getaStep(x) {
    return this.mps.db.object('users/' + this.userId + '/steps/' + x);
  }

  addTask(title) {
    this.task = {
      'title': title,
      'stepKey': this.stepKey,
      'projectKey': this.myProjectKey,
      'isDone': false,
      'dateAdded': new Date().getTime()
    };
    this.mps.tasksDatabase.push(this.task);
    this.completion(this.tasksInStep);
  }


  taskStatus(key, status) {
    this.mps.tasksDatabase.update(key, { isDone: status });
    this.completion(this.tasksInStep);
  }

  taskEdit(key, title) {
    this.mps.tasksDatabase.update(key, { title: title });
  }
  removeTask(key) {
    this.mps.tasksDatabase.remove(key);
  }

  stepEdit(key, summary) {
    console.log(key, summary);
    this.mps.stepsDatabase.update(key, { summary: summary });
  }

  completion(passedArray) {

    passedArray.subscribe(x => {
      const totalLength = x.length;
      this.completedTasksLength = 0;
      for (let y of x) {
        if ( y.isDone === true ) {
          this.completedTasksLength = this.completedTasksLength + 1;
          this.percentageOfStepDone = Math.round( ( this.completedTasksLength / totalLength ) * 10000) / 100;
        }
      }
    });

  }

}
