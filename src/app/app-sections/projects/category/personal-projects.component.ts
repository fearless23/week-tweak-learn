import { Component }       from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./project-v1.css'],
  providers: [ProjectsService]
})

export class PersonalProjectsComponent {

  personalProjects;
  
  constructor(private ps: ProjectsService) {}  

  ngOnInit() {
    this.personalProjects = this.ps.personalProjects;
  }
}
