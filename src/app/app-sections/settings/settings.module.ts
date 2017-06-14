// app/characters/characters.module.ts

// Angular Module Decorator
import { NgModule } from '@angular/core';  

// Shared Module : Forms, common, Http
import { SharedModule} from '../../shared/shared.module';
// Other required things
import 'rxjs/Rx';

// Routing Module and Components
import { SettingsRoutingModule, rc } from './settings.routing';
 
//Services, Pipes, Other
import { SettingsService } from './settings.service';


@NgModule({
  imports: [ SharedModule, SettingsRoutingModule ],
  declarations: [rc],
  providers:[SettingsService]
})

export class SettingsModule { }  