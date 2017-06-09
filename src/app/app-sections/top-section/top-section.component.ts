import { Component, Input } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
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
  constructor(public af: AngularFire,private router: Router) {

    //this.af.auth.subscribe(data => this.user = data.auth );

  }
  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/signout');
     console.log('logged out');
  }
  
}
