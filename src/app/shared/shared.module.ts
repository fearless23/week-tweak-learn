import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HttpModule }          from '@angular/http';

//import { AppRoutingModule } from './../app.routing';
// Shared Pipes: Declare and export
import { CapitalizePipe }      from './pipes/capitalize.pipe';
// Shared Directives: Declare and export
import { MenuComponent }      from '../menu/menu.component';

@NgModule({
  imports:      [ CommonModule//, AppRoutingModule 
  ],
  declarations: [ 
      //pipes
      CapitalizePipe, MenuComponent
      //directives
    ],
  exports:      [ CommonModule, FormsModule, HttpModule, //AppRoutingModule,
        // pipes
        CapitalizePipe, MenuComponent
        // directives
   ]
})
export class SharedModule { }
