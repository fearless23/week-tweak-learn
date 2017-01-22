import { Component } from '@angular/core';
import {ProjectsService} from './projects.service';

declare var firebase: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../shared/styles/content-topbar.css'],
  providers: [ProjectsService]
  
})

export class ProjectsComponent {
  username;
  user;
  isClassVisible: false;
  rty: true;
  constructor(private ps:ProjectsService) {
    this.username = this.ps.username;
    this.ps.af.auth.subscribe(data => this.user = data.auth);
  }

  ngOnInit() { }

}