import { Component, OnInit } from '@angular/core';
import { MyProjectService}   from '../utilities/my-project.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './overview.html',
  providers: [MyProjectService]
})

export class ProjectOverviewComponent implements OnInit {

  myProject;

  constructor(private mps: MyProjectService) {}

  ngOnInit() {
    this.myProject = this.mps.myProject;
  }
}
