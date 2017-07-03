// app/projects/projects.routing.ts
// Projects Routing as a Module
import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

// Components
import { SettingsComponent }       from './settings.component';
import { BasicSettingsComponent }  from './category/basic.component';
import { MoreComponent }           from './category/more.component';

// Routes
const accountRoutes: Routes = [
  { path: '',
    component: SettingsComponent,
    children: [
      { path: 'more', component: MoreComponent          },
      { path: '',     component: BasicSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule]
})

export class SettingsRoutingModule { }

export const rc = [
  SettingsComponent,
  BasicSettingsComponent,
  MoreComponent
];
