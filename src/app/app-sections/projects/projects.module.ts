// app/characters/characters.module.ts

// Angular Module Decorator
import { NgModule } from '@angular/core';  

// Shared Module : Forms, common, Http
import { SharedModule} from '../../shared/shared.module';
// Other required things
import 'rxjs/Rx';

// Routing Module and Components
import { ProjectsRoutingModule, rc } from './projects.routing';
 
//Services, Pipes, Other
import { ProjectsService } from './projects.service';


@NgModule({
  imports: [ SharedModule, ProjectsRoutingModule],
  declarations: [rc],
  providers:[ProjectsService]
})

export class ProjectsModule { }  