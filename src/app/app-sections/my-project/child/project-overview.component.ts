import { Component } from '@angular/core';
import { MyProjectService} from '../my-project.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './overview.html',
  providers: [MyProjectService]
})

export class ProjectOverviewComponent {

  myProject;

  constructor(private mps: MyProjectService){}

  ngOnInit(){
    this.myProject = this.mps.myProject;
  }
}
