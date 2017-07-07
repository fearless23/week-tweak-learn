import { Component, OnInit } from '@angular/core';
import { SettingsService }   from '../settings.service';

@Component({
  selector: 'app-profile',
  templateUrl: './more.component.html',
  // styleUrls: ['./profile.component.css'],
  providers: [SettingsService]
})

export class MoreComponent implements OnInit {

 user;

  constructor(public ss: SettingsService) {}

  ngOnInit() {
    this.user = this.ss.userInfo;
  }
}
