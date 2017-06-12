import { Component, OnInit } from '@angular/core';
import { AccountService    } from '../account.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  providers: [AccountService]
})

export class MyAccountComponent {

  user;

  constructor( private as: AccountService){
    this.as.user.subscribe(data => this.user = data);
  }

  ngOnInit() {
   //this.as.user.subscribe(data => this.user = data);

  }
}
