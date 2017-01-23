// app.routing.ts
// App Routing as a Module
import { NgModule }                 from '@angular/core';  
import { Routes, RouterModule }     from '@angular/router';

// Components
import { LoginComponent }           from './login/login.component';
import { NotFoundComponent }        from './not-found/not-found.component';
import { GoComponent }           from './Go/Go.component';
import { SignOutComponent } from './sign-out/sign-out.component';
// Contact Component is part of Contact Module which is eagerly loaded in Root Module
// but not declared in Root Module, but imported here for routing purpose...
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth.service';
// Routes
const routes: Routes = [  
    // Lazy Loaded Modules
    //{ path: 'projects', loadChildren: 'app/projects/projects.module#ProjectsModule', canActivate: [AuthGuard]},
    //{ path: 'project/:id', loadChildren: 'app/my-project/my-project.module#MyProjectModule', canActivate: [AuthGuard] },
    //{ path: 'project', pathMatch: 'full', redirectTo: 'projects', canActivate: [AuthGuard]},
    { path: '', loadChildren: 'app/start/start.module#StartModule', canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signout', component: SignOutComponent },
    { path: 'welcome', component: GoComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const rc = [LoginComponent, NotFoundComponent, GoComponent, SignOutComponent]