// app/projects/projects.routing.ts
// Projects Routing as a Module
import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

// Components
import { SettingsComponent }       from './settings.component';
import { BasicSettingsComponent }  from './basic/basic.component';
import { AccountSettingsComponent }  from './basic/account/account.component';
import { ProfileSettingsComponent }  from './basic/profile/profile.component';
import { MoreComponent }           from './more/more.component';

// Routes
const accountRoutes: Routes = [
  { path: '',
    component: SettingsComponent,
    children: [
      { path: 'more', component: MoreComponent          },
      { path: 'basic',     component: BasicSettingsComponent,
        children: [
          { path: 'account', component: AccountSettingsComponent},
          { path: 'profile', component: ProfileSettingsComponent},
          { path: '', pathMatch: 'full', redirectTo: 'account'}
        ]
      },
      { path: '', pathMatch: 'full', redirectTo: 'basic' }
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
  AccountSettingsComponent,
  ProfileSettingsComponent,
  MoreComponent
];
