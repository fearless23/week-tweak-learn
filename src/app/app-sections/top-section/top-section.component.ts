import { Component, Input }  from '@angular/core';
import { AngularFireAuth }   from 'angularfire2/auth';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css']
})

export class TopSectionComponent {

  @Input() tabsData;
  @Input() pageTitle;

  drop = false;
  dropNotification = false;
  dropAddBtn = false;
  userName;

  onClickOutside(event: Object) {
    this.drop = false;
  }

  onClickOutsideNotification(event: Object) {
    this.dropNotification = false;
  }

  onClickOutsideAddBtn(event: Object) {
    this.dropAddBtn = false;
  }

  constructor(public afa: AngularFireAuth, private router: Router) {

    afa.authState.subscribe(data => {
      if (data) {
        this.userName = data.displayName;
      }
    });

  }

  logout() {
    this.afa.auth.signOut();
    this.router.navigateByUrl('/signout');
    console.log('logged out');
  }

}
