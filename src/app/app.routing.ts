// app.routing.ts
// App Routing as a Module
import { NgModule }                 from '@angular/core';  
import { Routes, RouterModule }     from '@angular/router';

// Components
import { LoginComponent }           from './auth-components/login/login.component';
import { SignOutComponent }         from './auth-components/sign-out/sign-out.component';
import { NotFoundComponent }        from './not-found/not-found.component';
import { WelcomeComponent }         from './site/welcome/welcome.component';

// Contact Component is part of Contact Module which is eagerly loaded in Root Module
// but not declared in Root Module, but imported here for routing purpose...
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth.service';

// Routes
const routes: Routes = [  
    { path: '', loadChildren: 'app/app-sections/start.module#StartModule', canActivate: [AuthGuard] },
    { path: 'signout', component: SignOutComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'login', component: LoginComponent },
    
    { path: 'welcome', component: WelcomeComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const rc = [LoginComponent, NotFoundComponent, WelcomeComponent, SignOutComponent]