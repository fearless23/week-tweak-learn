import { Component }       from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./card.css'],
  providers: [ProjectsService]
})

export class PersonalProjectsComponent {

  personalProjects;
  selected = null;

  setSelected(i){
    this.selected = i;
  }

  removeProject(key){
    this.ps.personalProjects.remove(key);
    this.selected = null;
  }
  
  constructor(private ps: ProjectsService) {}  

  ngOnInit() {
    this.personalProjects = this.ps.personalProjects;
    console.log("From BComp NGINIT - "+ this.ps.userId);
  }
}
