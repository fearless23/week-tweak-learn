// app/projects/projects.routing.ts
// Projects Routing as a Module
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AddStuffComponent }   from './add-stuff.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddStepComponent }    from './add-step/add-step.component';
import { AddTaskComponent }    from './add-task/add-task.component';

// Routes
const addStuffRoutes: Routes = [
    { path: '',
      component: AddStuffComponent,
      children: [
        { path: 'add-project', component: AddProjectComponent},
        { path: 'add-step',    component: AddStepComponent},
        { path: 'add-task',    component: AddTaskComponent},
        { path: '', redirectTo: 'add-project'}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(addStuffRoutes)],
  exports: [RouterModule]
})

export class AddStuffRoutingModule { }

export const rc = [
  AddStuffComponent,
  AddProjectComponent,
  AddStepComponent,
  AddTaskComponent
];
