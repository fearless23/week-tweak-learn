import { Component, OnInit } from '@angular/core';
import { ProjectsService }   from '../projects.service';

@Component({
  selector: 'app-base-projects',
  templateUrl: './base-projects.component.html',
  styleUrls: ['./card.css'],
  providers: [ProjectsService]
})

export class BaseProjectsComponent implements OnInit {

  baseProjects;
  selected = null;

  setSelected(i) {
    this.selected = i;
  }

  removeProject(key) {
    this.ps.baseProjects.remove(key);
    this.selected = null;
  }

  constructor(private ps: ProjectsService) { }

  ngOnInit() {
    this.baseProjects = this.ps.baseProjects;
  }

}
