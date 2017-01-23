import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: [ 'contact.component.css' ]
})
export class ContactComponent {
  user={};
  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(data => this.user = data.auth );

  }

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/signout');
     console.log('logged out');
  }

  ngOnInit() {} 
  }



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/