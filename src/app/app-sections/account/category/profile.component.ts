import { Component } from '@angular/core';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [AccountService]
})

export class ProfileComponent {
  ngOnInit() {}
}