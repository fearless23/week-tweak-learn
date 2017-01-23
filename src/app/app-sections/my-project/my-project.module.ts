// app/my-project/my-project.module.ts

// Angular Module Decorator
import { NgModule } from '@angular/core';  

// Shared Module: Forms, Common, Http
import { SharedModule } from '../../shared/shared.module';  
// Other Required Things
import 'rxjs/Rx';

// Routing Module and Components
import { MyProjectRoutingModule, rc } from './my-project.routing';

@NgModule({
  imports: [ 
    SharedModule,
    MyProjectRoutingModule
  ],
  declarations: [rc]
})
export class MyProjectModule { }  