import { Component, OnInit } from '@angular/core';
import { SettingsService   } from '../../settings.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile.component.html',
  styleUrls: ['../../settings.css'],
  providers: [SettingsService]
})

export class ProfileSettingsComponent implements OnInit {

  user;

  constructor( private ss: SettingsService) {}

  ngOnInit() {
    this.user = this.ss.userInfo;
  }
}
