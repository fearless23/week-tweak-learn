// app/projects/projects.routing.ts
// Projects Routing as a Module
import { NgModule }                   from '@angular/core';  
import { Routes, RouterModule }       from '@angular/router'; 

// Components
import { ProfileComponent }           from './profile.component';

// Routes
const profileRoutes: Routes = [
    { path: '', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule { }

export const rc = [
  ProfileComponent
  ];