import { Component, OnInit } from '@angular/core';
import { MyProjectService }  from '../my-project.service';

@Component({
  selector: 'app-project-steps',
  templateUrl: './steps.html',
  styleUrls: ['./steps.css']
})

export class ProjectStepsComponent implements OnInit {
  myProjectKey
  userId;
  
  steps;
  initialStepKey;

  stepKey;
  selectedStep;
  tasksInStep;

  task;

  completedTasksLength;
  percentageOfStepDone;
  
  dropStepSelector = false;
  onClickOutsideStepSelector(event:Object) {
    this.dropStepSelector = false;
  }

  constructor( private mps: MyProjectService) {}

  ngOnInit(){
    this.myProjectKey = this.mps.projectKeyFromRoute;
    this.userId = this.mps.userId;

    this.steps = this.mps.steps;    
    
    //Set a step as initial/default
    this.steps.subscribe(data =>  {
      if(data.lenght>0){ 
        this.initialStepKey = data[0].$key;
        this.setStepId(this.initialStepKey);
      }
    });
  }

  
  setStepId(key){
    this.stepKey = key;
    this.selectedStep = this.getaStep(key);
    this.tasksInStep = this.getTasksinStep(key);
    //this.completion(this.tasks);
  }

  getTasksinStep(x){
    return this.mps.db.list('users/'+this.userId+'/tasks', {
          query: {
            orderByChild: 'stepKey',
            equalTo: x
          }
        })
  }

  getaStep(x){
    return this.mps.db.object('users/'+this.userId+'/steps/'+x)
  }

  addTask(title) {
    this.task = {
      "title": title,
      "stepKey": this.stepKey,
      "projectKey": this.myProjectKey,
      "isDone": false,
      "dateAdded": new Date().getTime()
    };
    this.mps.tasksDatabase.push(this.task);
    //this.completion(this.tasks);
  }


  taskStatus(key, status){
    this.mps.tasksDatabase.update(key, { isDone: status });
    //this.completion(this.tasks);
   
  }

  taskEdit(key, title){
    this.mps.tasksDatabase.update(key, { title: title });
    //this.completion(this.tasks);
    
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
