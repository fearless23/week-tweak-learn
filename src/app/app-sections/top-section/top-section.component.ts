import { Component, Input }  from '@angular/core';
import { AngularFireAuth }   from 'angularfire2/auth';
import { AngularFireDatabase,
         FirebaseObjectObservable }  from 'angularfire2/database';
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
  dropProjectSelector = false;
  isTopIconsVisible = false;

  userName;
  userID;
  baseProjects;
  personalProjects;
  proProjects;
  socialProjects;


  onClickOutside(event: Object) {
    this.drop = false;
  }

  onClickOutsideNotification(event: Object) {
    this.dropNotification = false;
  }

  onClickOutsideProjectSelector(e) {
    this.dropProjectSelector = false;
  }

  constructor(public afa: AngularFireAuth, private router: Router, private afdb: AngularFireDatabase) {

    afa.authState.subscribe(data => {
      if (data) {
        this.userName = data.displayName;
        const userID = data.uid;
        const url = '/users/' + userID + '/projects';

        this.baseProjects = afdb.list(url, {
          query: {
            orderByChild: 'category',
            equalTo: 'base'
          }
        });
        this.personalProjects = afdb.list(url, {
          query: {
            orderByChild: 'category',
            equalTo: 'personal'
          }
        });
        this.proProjects = afdb.list(url, {
          query: {
            orderByChild: 'category',
            equalTo: 'pro'
          }
        });
        this.socialProjects = afdb.list(url, {
          query: {
            orderByChild: 'category',
            equalTo: 'social'
          }
        });
      }
    }); // afa auth

  }

  logout() {
    this.afa.auth.signOut();
    this.router.navigateByUrl('/signout');
  }

}
