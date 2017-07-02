import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuToggle = false
  userName;
  userPhoto;
  constructor(private afa: AngularFireAuth) {
    afa.authState.subscribe(data => {
      if(data) {
        this.userName = data.displayName;
        this.userPhoto = data.photoURL;
      }
    });
   
  }
  onClickOutsideMainMenu(e){
    this.menuToggle = false;
  }
}
