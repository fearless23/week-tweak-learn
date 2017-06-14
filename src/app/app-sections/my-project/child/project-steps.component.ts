import { Component, OnInit } from '@angular/core';
import { MyProjectService }  from '../my-project.service';

@Component({
  selector: 'app-project-steps',
  templateUrl: './project-steps.component.html',
  styleUrls: ['./project-steps.component.css']
})

export class ProjectStepsComponent implements OnInit {
  userId;
  db;
  milestones;
  steps;
  task;
  stepKey;
  tasks = [];
  targetedTask;
  completedTasksLength;
  percentageOfStepDone;
  selectedIndex = 0;
  taskIndex;
  title;
  constructor( private mps: MyProjectService) {}

  ngOnInit(){
    this.milestones = this.mps.milestones;
    this.steps = this.mps.steps;
    this.db = this.mps.stepsDb;
    this.userId = this.mps.userId;
    this.db.list('users/'+this.userId+'/tasks').subscribe( data =>{
      this.tasks = [];
			for(let task of data){
        if(task.stepKey === this.steps[0].$key){ this.tasks.push(task); }
      };
      this.completion(this.tasks);
    });
  }
  setStepId(key, i){
    this.selectedIndex=i;
    this.stepKey = key;
    this.db.list('users/'+this.userId+'/tasks').subscribe( data =>{
      this.tasks = [];
			for(let task of data){
        if(task.stepKey === this.stepKey){ this.tasks.push(task); }
      };
      this.completion(this.tasks);
    });    
  }

  addTask(title) {
    this.task = {"title": title, "stepKey": this.stepKey, isDone: false, "dateAdded": new Date().getTime()};
    this.db.list('/users/'+this.userId+'/tasks').push(this.task);
    this.completion(this.tasks);
    //this.db.list('/users/'+this.userId+'/steps').update(this.stepKey, { blah: this.percentageOfStepDone });
  }


  taskStatus(key, status){
    this.db.list('/users/'+this.userId+'/tasks').update(key, { isDone: status });
    this.completion(this.tasks);
    //this.db.list('/users/'+this.userId+'/steps').update(this.stepKey, { blah: this.percentageOfStepDone });
  }


  completion(array){
    this.completedTasksLength = 0;
    for(var task of array) {
      if(task.isDone === true){ this.completedTasksLength = this.completedTasksLength+1; }
    }
    this.percentageOfStepDone= Math.round((this.completedTasksLength/array.length)*10000)/100;
 }


}
