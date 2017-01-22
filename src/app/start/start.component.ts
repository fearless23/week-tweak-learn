import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-start',
  templateUrl: 'start.component.html',
  styleUrls: [ 'start.component.css' ]
})
export class StartComponent {
  
  constructor(public af: AngularFire,private router: Router) { }

  ngOnInit() {} 
  
  }
