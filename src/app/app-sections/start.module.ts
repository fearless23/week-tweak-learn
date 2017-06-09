// This is for Module Decoration 
import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../shared/shared.module';

//import {StartComponent } from './start.component';
// Root Component
import { MenuComponent }       from './menu/menu.component';
//import { TopSectionComponent } from './top-section/top-section.component';
// Roouter for Root Modules
import { StartRoutingModule, rc } from './start.routing';

import { AuthGuard } from './../auth.service';

@NgModule({
  imports: [
    SharedModule,
    StartRoutingModule
  ],
  declarations: [
    //StartComponent,
    MenuComponent,
    //TopSectionComponent,
    rc
  ],
  providers: [  AuthGuard]
})

export class StartModule { }
