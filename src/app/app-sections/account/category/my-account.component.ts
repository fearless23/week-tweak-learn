import { Component } from '@angular/core';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  providers: [AccountService]
})

export class MyAccountComponent {
  user;
   constructor( as: AccountService){
     this.user = as.user;
   }
   ngOnInit() {}
}
