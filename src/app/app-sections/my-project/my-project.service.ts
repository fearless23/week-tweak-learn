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
    /*af.database.list('users/'+this.userId+'/milestones').subscribe( data =>{ 
      for(let milestone of data){
        if(milestone.project === 'fgh'){ this.milestones = milestone};
    }});*/
    af.database.list('users/'+this.userId+'/steps').subscribe( data =>{ 
      for(let step of data){
        if(step.projectKey === this.id){ this.steps.push(step);}
    }});
  }

  /*ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
    let id = params['id'];
    console.log("ID " +id);
  });*/

  /*this.db.map( projects => {
    const filtered = projects.filter(project => project.uid=== '-KamS40N02VGAZmmRWBF');
    console.log("Filtered "+filtered);
    this.project = filtered;  })

  }*/


}