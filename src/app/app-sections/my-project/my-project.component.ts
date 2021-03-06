import { Component, OnInit } from '@angular/core';
import { MyProjectService} from './utilities/my-project.service';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  providers: [MyProjectService]
})

export class MyProjectComponent implements OnInit {
  tabsData = [
    {
      'title': 'Overview',
      'link' : './'
    },
    {
      'title': 'Steps',
      'link' : './steps'
    },
    {
      'title': 'List',
      'link' : './checklist'
    },
    {
      'title': 'Settings',
      'link' : './b'
    },
  ];

  title;
  constructor( private mps: MyProjectService) {}

  ngOnInit() {
    this.mps.myProject.subscribe(	data => this.title = data.title );
  }
}
