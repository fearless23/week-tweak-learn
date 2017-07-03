import { Component, OnInit }       from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-pro-projects',
  templateUrl: './pro-projects.component.html',
  styleUrls: ['./card.css'],
  providers: [ProjectsService]
})

export class ProProjectsComponent implements OnInit {
  proProjects;

  selected = null;

  setSelected(i) {
    this.selected = i;
  }

  removeProject(key) {
    this.ps.proProjects.remove(key);
    this.selected = null;
  }
  constructor(private ps: ProjectsService) {}

  ngOnInit() {
    this.proProjects = this.ps.proProjects;
  }
}
