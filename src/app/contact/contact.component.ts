import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: [ 'contact.component.css' ]
})
export class ContactComponent {

  user= {};
  constructor(public afa: AngularFireAuth, private router: Router) {}

  logout() {
     this.afa.auth.signOut();
     this.router.navigateByUrl('/welcome');
     console.log('logged out');
  }

}

