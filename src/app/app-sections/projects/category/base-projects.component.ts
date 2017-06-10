import { Component } from '@angular/core';
import {ProjectsService} from '../projects.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-base-projects',
  templateUrl: './base-projects.component.html',
  styleUrls: ['./project-v1.css'],
  providers: [ProjectsService]
})

export class BaseProjectsComponent {
  temp;
  userId;
  baseProjects;
  //baseProjects: FirebaseListObservable<any>;
  url;
  constructor(private projectsservice: ProjectsService, public afdb: AngularFireDatabase, public afa: AngularFireAuth,) {
    this.afa.authState.subscribe(auth => { 
      if(auth) { this.userId = auth.uid; }
      });
    //this.userId = projectsservice.userId;
    this.url = '/users/'+'1zW4wdd0aPWorwknSphcvNCCyj33'+'/projects/base';
    this.afdb.list(this.url).subscribe(data => this.baseProjects = data);
    //this.baseProjects = this.afdb.list(this.url);
  }

  removeProject(key){
    this.projectsservice.db.list(this.url).remove(key)
  }
  ngOnInit() {}
}