// app/projects/projects.routing.ts
// Projects Routing as a Module
import { NgModule }                   from '@angular/core';  
import { Routes, RouterModule }       from '@angular/router'; 

// Components
import { ProjectsComponent }           from './projects.component';
import { BaseProjectsComponent }       from './category/base-projects.component';
import { PersonalProjectsComponent }   from './category/personal-projects.component';
import { ProProjectsComponent }        from './category/pro-projects.component';
import { SocialProjectsComponent }     from './category/social-projects.component';
import {AddProjectComponent}           from './add-project/add-project.component';

// Routes
const projectsRoutes: Routes = [
  { path: '', 
    component: ProjectsComponent, 
    children:[
      {path:'base',     component: BaseProjectsComponent     },
      {path:'pro',      component: ProProjectsComponent      },
      {path:'social',   component: SocialProjectsComponent   },
      {path:'personal', component: PersonalProjectsComponent },
      //{path:'add', component: AddProjectComponent },
      { path: '', pathMatch: 'full', redirectTo: 'personal'  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectsRoutes)],
  exports: [RouterModule]
})

export class ProjectsRoutingModule { }

export const rc = [
  ProjectsComponent, 
  BaseProjectsComponent,
  PersonalProjectsComponent,
  ProProjectsComponent,
  SocialProjectsComponent,
  AddProjectComponent
];