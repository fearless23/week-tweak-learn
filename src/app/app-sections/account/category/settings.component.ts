import { Component } from '@angular/core';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  providers: [AccountService]
})

export class SettingsComponent {
  ngOnInit() {}
}