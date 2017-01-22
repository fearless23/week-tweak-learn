import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { Subject } from 'rxjs/Subject';
//const colors = ['orange', 'blue', 'red', 'violet', 'green'];
//const randNum = Math.random()*5;

@Injectable()
export class ProjectsService {
  project;
  db;
  username;
  userId;
  constructor(private http: Http, public af: AngularFire) {
    this.af.auth.subscribe(auth => { 
      if(auth) { this.userId = auth.uid; this.username = auth.auth.displayName; }
      });
    //this.db = this.af.database.list('users/'+this.userId+'/projects');
    this.db = this.af.database;
   }
 
  fetchProjects(){
   return this.http.get('https://week-tweak-learn.firebaseio.com/projects/.json').map( res => res.json() );
  }
  fetchBaseProjects(){
   return this.http.get('https://week-tweak-learn.firebaseio.com/projects/base/.json').map( res => res.json() );
  }
  fetchPersonalProjects(){
   return this.http.get('https://week-tweak-learn.firebaseio.com/projects/personal/.json').map( res => res.json() );
  }
  fetchProProjects(){
   return this.http.get('https://week-tweak-learn.firebaseio.com/projects/pro/.json').map( res => res.json() );
  }
  fetchSocialProjects(){
   return this.http.get('https://week-tweak-learn.firebaseio.com/projects/social/.json').map( res => res.json() );
  }

  //randcolors = colors[randNum];
  addProject(a:"none",b:"none") {
      this.project = {"title": a, "summary": b};
      this.db.push(this.project);
  };
  deleteProject(x){
    this.db.remove(x);
  }

}

//https://week-tweak-learn.firebaseio.com/.json