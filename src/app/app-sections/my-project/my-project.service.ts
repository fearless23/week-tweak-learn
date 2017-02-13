import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, AuthMethods } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MyProjectService {

  sub: any;
  stepsDb;
  db;
  id;
  userId;
  project={
    info: "",
  };
  milestones;
  steps=[];
  tasks=[];
  constructor( private route: ActivatedRoute, af: AngularFire) {
    af.auth.subscribe( auth =>
      this.userId = auth.uid
    );
    this.stepsDb = af.database;
    this.route = route;
    this.sub = this.route.params.subscribe(params => this.id = params['id']);
    this.db = af.database.list('users/'+this.userId+'/projects', { preserveSnapshot: true });
    this.db.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        snapshot.forEach(myproject =>{
          if(myproject.key === this.id){
            this.project.info = myproject.val();
          };
        })
      })
    });
    af.database.list('users/'+this.userId+'/steps').subscribe( data =>{ 
      for(let step of data){
        if(step.projectKey === this.id){ this.steps.push(step);}
    }});
    /*af.database.list('users/'+this.userId+'/tasks').subscribe( data =>{ 
      for(let task of data){
        if(task.step === this.step_id){ this.tasks.push(task);}
    }});*/

  }

  

}