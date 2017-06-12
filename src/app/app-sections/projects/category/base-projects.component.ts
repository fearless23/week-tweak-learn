import { Component }       from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-base-projects',
  templateUrl: './base-projects.component.html',
  styleUrls: ['./project-v1.css'],
  providers: [ProjectsService]
})

export class BaseProjectsComponent {

  url;
  baseProjects;
  
  constructor(private ps: ProjectsService) {}
    
  /*removeProject(key){
    this.afdb.list(this.url).remove(key)
  }*/

  ngOnInit() {
    this.baseProjects = this.ps.baseProjects;
  }
  
}