import { Component } from '@angular/core';
import { MyProjectService} from '../my-project.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  providers: [MyProjectService]
})

export class ProjectOverviewComponent {

  project;
  constructor(private mps: MyProjectService){
    
  }

  ngOnInit(){
    this.project = this.mps.project;
  }
}
