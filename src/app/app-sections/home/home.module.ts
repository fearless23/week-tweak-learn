// Angular Module Decorator
import { NgModule } from '@angular/core';

// Shared Module : Forms, common, Http
import { SharedModule} from '../../shared/shared.module';

// Other required things
import 'rxjs/Rx';

// Routing Module and Components
import { HomeRoutingModule, rc } from './home.routing';

// Services, Pipes, Other
import { HomeService } from './home.service';


@NgModule({
  imports: [ SharedModule, HomeRoutingModule ],
  declarations: [rc],
  providers: [HomeService]
})

export class HomeModule { }
