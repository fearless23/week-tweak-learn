// app/characters/characters.module.ts

// Angular Module Decorator
import { NgModule } from '@angular/core';  

// Shared Module : Forms, common, Http
import { SharedModule} from '../../shared/shared.module';
// Other required things
import 'rxjs/Rx';

// Routing Module and Components
import { AccountRoutingModule, rc } from './account.routing';
 
//Services, Pipes, Other
import { AccountService } from './account.service';


@NgModule({
  imports: [ SharedModule, AccountRoutingModule ],
  declarations: [rc],
  providers:[AccountService]
})

export class AccountModule { }  