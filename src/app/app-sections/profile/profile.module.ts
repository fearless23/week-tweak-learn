// app/characters/characters.module.ts

// Angular Module Decorator
import { NgModule } from '@angular/core';

// Shared Module : Forms, common, Http
import { SharedModule} from '../../shared/shared.module';

// Other required things
import 'rxjs/Rx';

// Routing Module and Components
import { ProfileRoutingModule, rc } from './profile.routing';

// Services, Pipes, Other
import { ProfileService } from './profile.service';


@NgModule({
  imports: [ SharedModule, ProfileRoutingModule],
  declarations: [rc],
  providers: [ProfileService]
})

export class ProfileModule { }
