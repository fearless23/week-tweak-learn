import { Component } from '@angular/core';
import { MyProjectService} from './my-project.service';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css', '../../shared/styles/content-topbar.css'],
  providers: [MyProjectService]
})

export class MyProjectComponent {
  project;
  drop = false;
  drop2 = false;
   
  constructor( private mps: MyProjectService) {
    this.project = mps.project;

    
  }
 
  onClickOutside(event:Object) {
      this.drop = false;
  }
  
  onClickOutside2(event:Object) {
     this.drop2= false;
  }
  
}