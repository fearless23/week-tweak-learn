import { NgModule       }    from '@angular/core';

// From Angular
import { CommonModule   }    from '@angular/common';
import { FormsModule    }    from '@angular/forms';
import { HttpModule     }    from '@angular/http';
import { RouterModule   }    from '@angular/router';

// From Dependencies
import { MomentModule   }    from 'angular2-moment';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

// Shared Pipes: Declare and export
import { CapitalizePipe }    from './pipes/capitalize.pipe';
import { FilterPipe }        from './pipes/filter.pipe';
import { TaskFilterPipe }    from './pipes/task-filter.pipe';

// Shared Directives: Declare and export
import { ClickOutsideDirective }    from './directives/click-outside.directive';

// Shared Components: Declare and export
import { TopSectionComponent }      from '../app-sections/top-section/top-section.component';
import { SearchBoxComponent }       from '../app-sections/top-section/search-box/search-box.component';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    RouterModule,
    NgxMyDatePickerModule
  ],
  declarations: [
    // Pipes
    CapitalizePipe,
    FilterPipe,
    TaskFilterPipe,
    // Directives
    ClickOutsideDirective,
    // Components
    TopSectionComponent,
    SearchBoxComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MomentModule,
    NgxMyDatePickerModule,
    // Pipes
    CapitalizePipe,
    FilterPipe,
    TaskFilterPipe,
    // Directives
    ClickOutsideDirective,
    // Components
    TopSectionComponent,
    SearchBoxComponent
   ]
})
export class SharedModule { }
