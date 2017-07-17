import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {

  @Input() contentTitle;

  projectsTabsData = [
    {
      'title': 'Base',
      'link' : './base'
    },
    {
      'title': 'Personal',
      'link' : './personal'
    },
    {
      'title': 'Pro',
      'link' : './pro'
    },
    {
      'title': 'Social',
      'link' : './social'
    },
  ];

  pageTitle= 'My Projects';

  addProjectModalVisible = false;

}
