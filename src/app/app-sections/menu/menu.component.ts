import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuExpanded = false;
  showMainMenu = false;
  user;
  constructor(private af: AngularFire) {
    this.af.auth.subscribe(data => {if(data){this.user = data.auth}});
  }
  onClickOutsideMainMenu(e){
    this.showMainMenu = false;
  }
}
