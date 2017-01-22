import { Component } from '@angular/core';
import { MyProjectService} from './my-project.service';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css', '../shared/styles/content-topbar.css'],
  providers: [MyProjectService]
})

export class MyProjectComponent {
  
  project;
  constructor( private mps: MyProjectService) {
    this.project = mps.project;
  }

  
  
}