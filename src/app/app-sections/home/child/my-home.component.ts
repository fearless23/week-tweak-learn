import { Component }   from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  providers: [HomeService]
})

export class MyHomeComponent {

  constructor( hs: HomeService) {}

}
