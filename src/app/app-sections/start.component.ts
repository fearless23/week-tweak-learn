import { Component }         from '@angular/core';
import { AngularFireAuth }   from 'angularfire2/auth';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: 'start.component.html'
})

export class StartComponent {

  loggedin = false;
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) {

    this.af.authState.subscribe( auth => {
      if ( !auth ) {
        this.router.navigateByUrl('/login');
      }
    });

  }

}
