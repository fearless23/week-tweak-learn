import { Component } from '@angular/core';
import {ProjectsService} from '../projects.service';

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
  url;
  constructor(private projectsservice: ProjectsService) {
    this.userId = projectsservice.userId;
    this.url = '/users/'+this.userId+'/projects/base';
    this.projectsservice.db.list(this.url).subscribe(data => this.baseProjects = data);
  }

  removeProject(key){
    this.projectsservice.db.list(this.url).remove(key)
  }
  ngOnInit() {}
}