import { Component, OnInit } from '@angular/core';
import { SettingsService }   from './settings.service';

@Component({
  selector: 'app-account',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.css'],
  providers: [SettingsService]
})

export class SettingsComponent implements OnInit {

  tabsData = [
    {
      'title': 'Basic',
      'link' : '/app/settings/basic',
      'exact': false
    },
    {
      'title': 'More',
      'link' : './more'
    }
  ];

  pageTitle = 'Settings';

  constructor(private ss: SettingsService) {}

  ngOnInit() {}

}
