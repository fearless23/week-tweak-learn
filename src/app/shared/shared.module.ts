import { NgModule       }    from '@angular/core';
import { CommonModule   }    from '@angular/common';
import { FormsModule    }    from '@angular/forms';
import { HttpModule     }    from '@angular/http';
import { MomentModule   }    from 'angular2-moment';
import { RouterModule   }    from '@angular/router'; 

// Shared Pipes: Declare and export
import { CapitalizePipe }    from './pipes/capitalize.pipe';
import { FilterPipe }    from './pipes/filter.pipe';
import { TaskFilterPipe }    from './pipes/task-filter.pipe';

// Shared Directives: Declare and export
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { TopSectionComponent }      from '../app-sections/top-section/top-section.component';
import { SearchBoxComponent }      from '../app-sections/top-section/search-box/search-box.component';

@NgModule({
  imports:      [ CommonModule, MomentModule, RouterModule ],
  declarations: [ 
    //pipes
    CapitalizePipe,
    FilterPipe,
    TaskFilterPipe,
    //directives
    ClickOutsideDirective,
    TopSectionComponent,
    SearchBoxComponent
  ],
  exports:      [ CommonModule, FormsModule, HttpModule, MomentModule,
        // pipes
        CapitalizePipe,
        FilterPipe,
        TaskFilterPipe,
        // directives
        ClickOutsideDirective,
        TopSectionComponent,
        SearchBoxComponent
   ]
})
export class SharedModule { }
