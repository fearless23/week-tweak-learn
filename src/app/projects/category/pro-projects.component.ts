import { Component } from '@angular/core';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-pro-projects',
  templateUrl: './pro-projects.component.html',
  styleUrls: ['./projects-card.css'],
  providers: [ProjectsService]
})

export class ProProjectsComponent {
  userId;
  proProjects;
  
  constructor(private projectsservice: ProjectsService) {
    this.userId = projectsservice.userId;
    let url = '/users/'+this.userId+'/projects/pro';
    this.projectsservice.db.list(url).subscribe(data => this.proProjects = data);
  }

  ngOnInit() {}
}