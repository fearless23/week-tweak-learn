import { Component } from '@angular/core';
import { HomeService} from '../home.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  providers: [HomeService]
})

export class TodayComponent {
  
   constructor( hs: HomeService){
     
   }
   ngOnInit() {}
}
