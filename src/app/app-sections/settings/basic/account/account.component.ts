import { Component, OnInit } from '@angular/core';
import { SettingsService   } from '../../settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account.component.html',
  styleUrls: ['../../settings.css'],
  providers: [SettingsService]
})

export class AccountSettingsComponent implements OnInit {

  user;
  countriesList;

  constructor( private ss: SettingsService) {}

  ngOnInit() {
    this.user = this.ss.userInfo;
    this.countriesList = this.ss.countriesList;
  }
}
