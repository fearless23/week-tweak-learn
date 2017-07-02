import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectsService {
  userId;
  db;
  projectsDatabase;
  baseProjects;
  personalProjects;
  proProjects;
  socialProjects;
  stepsDb;
  myList;
 
  constructor(public afdb: AngularFireDatabase, public afa: AngularFireAuth) {

    afa.authState.subscribe(data => {
      if(data) {
        this.userId = data.uid;
        const userID = data.uid;
        const url = '/users/'+userID+'/projects';
        
        this.projectsDatabase = afdb.list(url);
        this.baseProjects = afdb.list(url, {
          query: {
            orderByChild: 'category',
            equalTo: 'base' 
          }
        });
        this.personalProjects = afdb.list(url, {
          query: {
            orderByChild: 'category',
            equalTo: 'personal' 
          }
        });
        this.proProjects = afdb.list(url, {
          query: {
            orderByChild: 'category',
            equalTo: 'pro' 
          }
        });
        this.socialProjects = afdb.list(url, {
          query: {
            orderByChild: 'category',
            equalTo: 'social' 
          }
        });
       
      }
    });

    this.db = afdb;

  }//Constructor
}//Class
