import { Component, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css']
})

export class TopSectionComponent {

  @Input() topSectionData;
  @Input() tabsData;
  @Input() pageTitle;

  drop = false;

  onClickOutside(event:Object) {
      this.drop = false;
  }

  constructor(public afa: AngularFireAuth, private router: Router) {}

  logout() {
     this.afa.auth.signOut();
     this.router.navigateByUrl('/signout');
     console.log('logged out');
  }
  
}
