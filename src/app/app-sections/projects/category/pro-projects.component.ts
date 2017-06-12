import { Component }       from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-pro-projects',
  templateUrl: './pro-projects.component.html',
  styleUrls: ['./projects-card.css'],
  providers: [ProjectsService]
})

export class ProProjectsComponent {
  proProjects;
  
  constructor(private ps: ProjectsService) {}  
   
  ngOnInit() {
    this.proProjects = this.ps.proProjects;
  }
}