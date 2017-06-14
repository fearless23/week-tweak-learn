import { Component, OnInit } from '@angular/core';
import { SettingsService }    from '../settings.service';

@Component({
  selector: 'app-profile',
  templateUrl: './more.component.html',
  //styleUrls: ['./profile.component.css'],
  providers: [SettingsService]
})

export class MoreComponent implements OnInit {

  user;
  userInfo;

  constructor(public ss:SettingsService){
    this.user = this.ss.user; // async behaviour
  }

  ngOnInit() {
    this.userInfo = this.ss.userInfo;
  }
}