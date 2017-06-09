// app/projects/projects.routing.ts
// Projects Routing as a Module
import { NgModule }                   from '@angular/core';  
import { Routes, RouterModule }       from '@angular/router'; 

// Components
import { AccountComponent }           from './account.component';
import { MyAccountComponent }       from './category/my-account.component';
import { ProfileComponent }   from './category/profile.component';
import { SettingsComponent }        from './category/settings.component';

// Routes
const accountRoutes: Routes = [
    { path: '', 
      component: AccountComponent, 
      children:[
        {path:'profile',      component: ProfileComponent      },
        {path:'settings',   component: SettingsComponent   },
        {path:'',     component: MyAccountComponent     }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule]
})

export class AccountRoutingModule { }

export const rc = [
  AccountComponent,
  MyAccountComponent,
  ProfileComponent,
  SettingsComponent
  ];