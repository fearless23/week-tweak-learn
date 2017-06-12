import { Component }       from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-social-projects',
  templateUrl: './social-projects.component.html',
  styleUrls: ['./projects-card.css'],
  providers: [ProjectsService]
})

export class SocialProjectsComponent {
  socialProjects;
  
  constructor(private ps: ProjectsService) {}  
   
  ngOnInit() {
    this.socialProjects = this.ps.socialProjects;
  }
}