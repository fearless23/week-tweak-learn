// Start.routing.ts
// Start Routing as a Module
import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

// Components
// Contact Component is part of Contact Module which is eagerly loaded in Root Module
// but not declared in Root Module, but imported here for routing purpose...

import { AuthGuard }        from './../auth.service';
import { StartComponent }   from './start.component';

// Routes
const routes: Routes = [
  { path: '',
    component: StartComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'projects', loadChildren: 'app/app-sections/projects/projects.module#ProjectsModule',
        canActivate: [AuthGuard]
      },
      { path: 'project/:id', loadChildren: 'app/app-sections/my-project/my-project.module#MyProjectModule',
        canActivate: [AuthGuard]
      },
      { path: 'project', pathMatch: 'full', redirectTo: 'projects',
        canActivate: [AuthGuard]
      },
      { path: 'settings', loadChildren: 'app/app-sections/settings/settings.module#SettingsModule',
        canActivate: [AuthGuard]
      },
      { path: 'profile', loadChildren: 'app/app-sections/profile/profile.module#ProfileModule',
        canActivate: [AuthGuard]
      },
      { path: '', loadChildren: 'app/app-sections/home/home.module#HomeModule',
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class StartRoutingModule { }

export const rc = [ StartComponent ];
