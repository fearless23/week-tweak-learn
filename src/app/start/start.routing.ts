// Start.routing.ts
// Start Routing as a Module
import { NgModule }                 from '@angular/core';  
import { Routes, RouterModule }     from '@angular/router';

// Components
// Contact Component is part of Contact Module which is eagerly loaded in Root Module
// but not declared in Root Module, but imported here for routing purpose...

import { AuthGuard } from './../auth.service';
import { StartComponent} from './start.component';
import { RtyComponent} from './rty/rty.component';
// Routes
const routes: Routes = [  
    // Lazy Loaded Modules
    //{ path: 'projects', loadChildren: 'app/projects/projects.module#ProjectsModule', canActivate: [AuthGuard]},
    //{ path: 'project/:id', loadChildren: 'app/my-project/my-project.module#MyProjectModule', canActivate: [AuthGuard] },
    //{ path: 'project', pathMatch: 'full', redirectTo: 'projects', canActivate: [AuthGuard]},
    //{ path: '', pathMatch: 'full', component: StartComponent, canActivate: [AuthGuard]},
    //{ path: '', component: StartComponent},
    { path: '', 
      component: StartComponent, canActivate: [AuthGuard],
      children:[
        { path: 'projects', loadChildren: 'app/projects/projects.module#ProjectsModule', canActivate: [AuthGuard]},
        { path: 'project/:id', loadChildren: 'app/my-project/my-project.module#MyProjectModule', canActivate: [AuthGuard] },
        { path: 'project', pathMatch: 'full', redirectTo: 'projects', canActivate: [AuthGuard]},
        { path: '', pathMatch: 'full', component: RtyComponent, canActivate: [AuthGuard]},

      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartRoutingModule { }

export const rc = [RtyComponent, StartComponent
]