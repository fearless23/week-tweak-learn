import { Component } from '@angular/core';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-base-projects',
  templateUrl: './base-projects.component.html',
  styleUrls: ['./projects-card.css'],
  providers: [ProjectsService]
})

export class BaseProjectsComponent {
  userId;
  baseProjects;
  
  constructor(private projectsservice: ProjectsService) {
    this.userId = projectsservice.userId;
    let url = '/users/'+this.userId+'/projects/base';
    this.projectsservice.db.list(url).subscribe(data => this.baseProjects = data);
  }

  ngOnInit() {}
}