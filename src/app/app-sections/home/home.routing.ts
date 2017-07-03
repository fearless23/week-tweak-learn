// app/projects/projects.routing.ts
// Projects Routing as a Module
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent }     from './home.component';
import { MyHomeComponent }   from './child/my-home.component';
import { WeekPlanComponent } from './child/week-plan.component';
import { TodayComponent }    from './child/today.component';

// Routes
const homeRoutes: Routes = [
    { path: '',
      component: HomeComponent,
      children: [
        { path: 'week-plan', component: WeekPlanComponent },
        { path: 'today',     component: TodayComponent    },
        { path: '',          component: MyHomeComponent   }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }

export const rc = [
  HomeComponent,
  MyHomeComponent,
  WeekPlanComponent,
  TodayComponent
];
