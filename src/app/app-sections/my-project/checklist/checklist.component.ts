import { Component, OnInit } from '@angular/core';
import { MyProjectService }  from '../utilities/my-project.service';

@Component({
  selector: 'app-project-checklist',
  templateUrl: './checklist.html',
  styleUrls: ['./checklist.css']
})

export class ProjectChecklistComponent implements OnInit {
  myProjectKey;
  userId;

  steps;
  tasks;

  task;

  completedTasksLength;
  percentageOfStepDone;

  constructor( private mps: MyProjectService) {}

  ngOnInit() {
    this.myProjectKey = this.mps.projectKeyFromRoute;
    this.userId = this.mps.userId;

    this.steps = this.mps.steps;
    this.tasks = this.mps.tasks;
  }

  addTaskFromList(title, key) {
    this.task = {
      'title': title,
      'stepKey': key,
      'projectKey': this.myProjectKey,
      'isDone': false,
      'dateAdded': new Date().getTime()
    };
    this.mps.tasksDatabase.push(this.task);
    // this.completion(this.tasks);
  }


  taskStatus(key, status) {
    this.mps.tasksDatabase.update(key, { isDone: status });
    // this.completion(this.tasks);

  }

  taskEdit(key, title) {
    this.mps.tasksDatabase.update(key, { title: title });
    // this.completion(this.tasks);

  }


  /*completion(array){
    this.completedTasksLength = 0;
    array.subscribe( tasks => {
      for(var task of array) {
        if(task.isDone === true){ this.completedTasksLength = this.completedTasksLength+1; }
      }
      this.percentageOfStepDone= Math.round((this.completedTasksLength/array.length)*10000)/100;
    })

  }*/

}
