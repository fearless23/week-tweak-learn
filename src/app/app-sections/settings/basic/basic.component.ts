import { Component, OnInit } from '@angular/core';
import { SettingsService   } from '../settings.service';

@Component({
  selector: 'app-basic-settings',
  templateUrl: './basic.component.html',
  styleUrls: ['../settings.css'],
  providers: [SettingsService]
})

export class BasicSettingsComponent implements OnInit {

  user;

  constructor( private ss: SettingsService) {}

  ngOnInit() {
    this.user = this.ss.userInfo;
  }
}
