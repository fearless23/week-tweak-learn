import { NgModule       }    from '@angular/core';
import { CommonModule   }    from '@angular/common';
import { FormsModule    }    from '@angular/forms';
import { HttpModule     }    from '@angular/http';
import { MomentModule   }    from 'angular2-moment';
import { RouterModule   }    from '@angular/router'; 
//import { AppRoutingModule } from './../app.routing';
// Shared Pipes: Declare and export
import { CapitalizePipe }    from './pipes/capitalize.pipe';
// Shared Directives: Declare and export
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { TopSectionComponent }      from '../app-sections/top-section/top-section.component';

@NgModule({
  imports:      [ CommonModule, MomentModule, RouterModule
  ],
  declarations: [ 
      //pipes
      CapitalizePipe,
      //directives
      ClickOutsideDirective,
      TopSectionComponent
    ],
  exports:      [ CommonModule, FormsModule, HttpModule, MomentModule,//AppRoutingModule,
        // pipes
        CapitalizePipe, //MenuComponent
        // directives
        ClickOutsideDirective,
        TopSectionComponent
   ]
})
export class SharedModule { }
