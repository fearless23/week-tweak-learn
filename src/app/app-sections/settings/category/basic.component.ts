import { Component, OnInit } from '@angular/core';
import { SettingsService    } from '../settings.service';

@Component({
  selector: 'app-basic-settings',
  templateUrl: './basic.component.html',
  styleUrls: ['./settings.css'],
  providers: [SettingsService]
})

export class BasicSettingsComponent {

  user;

  constructor( private ss: SettingsService){
    this.ss.user.subscribe(data => this.user = data); // Sync Behaviour
  }

  ngOnInit() {}
}
