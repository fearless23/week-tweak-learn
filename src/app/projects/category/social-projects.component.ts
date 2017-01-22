import { Component } from '@angular/core';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-social-projects',
  templateUrl: './social-projects.component.html',
  styleUrls: ['./projects-card.css'],
  providers: [ProjectsService]
})

export class SocialProjectsComponent {
  userId;
  socialProjects;
  
  constructor(private projectsservice: ProjectsService) {
    this.userId = projectsservice.userId;
    let url = '/users/'+this.userId+'/projects/social';
    this.projectsservice.db.list(url).subscribe(data => this.socialProjects = data);
  }

  ngOnInit() {}
}