import { Component } from '@angular/core';
import { MyProjectService} from '../my-project.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: [],
  providers: [MyProjectService]
})

export class ProjectOverviewComponent {

  project;
  constructor(private mps: MyProjectService){
    this.project = mps.project;
  }

}
