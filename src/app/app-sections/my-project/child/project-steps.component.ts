import { Component } from '@angular/core';
import { MyProjectService} from '../my-project.service';

@Component({
  selector: 'app-project-steps',
  templateUrl: './project-steps.component.html',
  styleUrls: []
})
export class ProjectStepsComponent {
  milestones;
  steps;
  constructor( private mps: MyProjectService) {
    this.milestones = this.mps.milestones;
    this.steps = this.mps.steps;
  }
}
