import { Component }   from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-week-plan',
  templateUrl: './week-plan.component.html',
  providers: [HomeService]
})

export class WeekPlanComponent {

  constructor( hs: HomeService) {}

}
