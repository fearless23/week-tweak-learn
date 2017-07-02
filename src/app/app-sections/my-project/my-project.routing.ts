// app/projects/projects.routing.ts
// Projects Routing as a Module
import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router'; 

// Components
import { MyProjectComponent } from './my-project.component';
import { ProjectOverviewComponent } from './child/overview.component';
import { ProjectChecklistComponent } from './child/checklist.component';
import { ProjectStepsComponent } from './child/steps.component';
import { AddStepComponent} from './add-step/add-step.component';
const projectRoutes: Routes = [
    { path: '', 
      component: MyProjectComponent, 
      children:[
        {path: 'add-step', component: AddStepComponent},
        {path:'checklist', component: ProjectChecklistComponent},
        {path:'steps', component: ProjectStepsComponent},
        {path:'', component: ProjectOverviewComponent}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})
export class MyProjectRoutingModule { }

export const rc = [
  MyProjectComponent, 
  ProjectOverviewComponent,
  ProjectChecklistComponent,
  ProjectStepsComponent,
  AddStepComponent
];
