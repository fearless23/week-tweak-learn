import { Component, OnInit } from '@angular/core';
import { ProjectsService }   from '../projects.service';

@Component({
  selector: 'app-social-projects',
  templateUrl: './social-projects.component.html',
  styleUrls: ['./card.css'],
  providers: [ProjectsService]
})

export class SocialProjectsComponent implements OnInit {

  socialProjects;
  selected = null;

  setSelected(i) {
    this.selected = i;
  }

  removeProject(key) {
    this.ps.socialProjects.remove(key);
    this.selected = null;
  }

  constructor(private ps: ProjectsService) {}

  ngOnInit() {
    this.socialProjects = this.ps.socialProjects;
  }
}
