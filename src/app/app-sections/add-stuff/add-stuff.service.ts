import { Injectable }      from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,
         FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class AddStuffService {

  userId;

  db;
  projectsDatabase;
  stepsDatabase;
  tasksDatabase;

  steps;

  constructor( private route: ActivatedRoute, private afa: AngularFireAuth, private afdb: AngularFireDatabase) {

  afa.authState.subscribe( auth => {
    this.userId = auth.uid;

    const projectsUrl = 'users/' + this.userId + '/projects';
    const stepsUrl = 'users/' + this.userId + '/steps';
    const tasksUrl = 'users/' + this.userId + '/tasks';
    this.db = afdb;
    this.projectsDatabase = afdb.list(projectsUrl);
    this.stepsDatabase = afdb.list(stepsUrl);
    this.tasksDatabase = afdb.list(tasksUrl);

    /*this.steps = afdb.list(stepsUrl, {
    query: {
      orderByChild: 'projectKey',
      equalTo: this.projectKeyFromRoute
    }
    });*/

  }); // afa.authState

  }

}
