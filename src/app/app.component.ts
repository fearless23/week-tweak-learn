import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loggedin = false;
  error: any;
  constructor(public af: AngularFireAuth, private router: Router) {
      this.af.authState.subscribe(auth => { 
      if(!auth) {
        this.router.navigateByUrl('/login');
      }
    });
  }

}

// Upgraded angularfire2 v4+