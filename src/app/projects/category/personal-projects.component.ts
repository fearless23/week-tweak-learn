import { Component } from '@angular/core';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./projects-card.css'],
  providers: [ProjectsService]
})

export class PersonalProjectsComponent {
  userId;
  personalProjects;
  
  constructor(private projectsservice: ProjectsService) {
    this.userId = projectsservice.userId;
    let url = '/users/'+this.userId+'/projects/personal';
    this.projectsservice.db.list(url).subscribe(data => this.personalProjects = data);
  }

  ngOnInit() {}
}
