import { NgModule       }    from '@angular/core';
import { CommonModule   }    from '@angular/common';
import { FormsModule    }    from '@angular/forms';
import { HttpModule     }    from '@angular/http';
import { MomentModule   }    from 'angular2-moment';
//import { AppRoutingModule } from './../app.routing';
// Shared Pipes: Declare and export
import { CapitalizePipe }    from './pipes/capitalize.pipe';
// Shared Directives: Declare and export
import { ClickOutsideDirective } from './directives/click-outside.directive';
//import { MenuComponent }      from '../menu/menu.component';

@NgModule({
  imports:      [ CommonModule, MomentModule
  ],
  declarations: [ 
      //pipes
      CapitalizePipe,
      //directives
      ClickOutsideDirective
    ],
  exports:      [ CommonModule, FormsModule, HttpModule, MomentModule,//AppRoutingModule,
        // pipes
        CapitalizePipe, //MenuComponent
        // directives
        ClickOutsideDirective
   ]
})
export class SharedModule { }
