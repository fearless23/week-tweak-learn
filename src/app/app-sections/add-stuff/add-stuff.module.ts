// Angular Module Decorator
import { NgModule } from '@angular/core';

// Shared Module : Forms, common, Http
import { SharedModule} from '../../shared/shared.module';

// Other required things
import 'rxjs/Rx';

// Routing Module and Components
import { AddStuffRoutingModule, rc } from './add-stuff.routing';

// Services, Pipes, Other
import { AddStuffService } from './add-stuff.service';


@NgModule({
  imports: [ SharedModule, AddStuffRoutingModule ],
  declarations: [rc],
  providers: [AddStuffService]
})

export class AddStuffModule { }
