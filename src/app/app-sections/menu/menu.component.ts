import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuExpanded = false;
  show = false;
  
  onClickOutside(e){
    this.show = false;
  }
}
