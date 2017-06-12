import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectsService {
  userId;
  
  db;
  baseProjects;
  personalProjects;
  proProjects;
  socialProjects;

  constructor(public afdb: AngularFireDatabase, public afa: AngularFireAuth) {
    afa.authState.subscribe(data => {
      if(data) {
        this.userId = data.uid;
        let userID = data.uid;
        let url1 = '/users/'+userID+'/projects/base';
        let url2 = '/users/'+userID+'/projects/personal';
        let url3 = '/users/'+userID+'/projects/pro';
        let url4 = '/users/'+userID+'/projects/social';
        this.baseProjects =     afdb.list(url1);//.subscribe(data => this.personalProjects = data);
        this.personalProjects = afdb.list(url2);
        this.proProjects =      afdb.list(url3);
        this.socialProjects =   afdb.list(url4);
      }
    });
    this.db = afdb;
  }

  ngOnInit() {
   
  }
}
