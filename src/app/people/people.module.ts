import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PacComponent } from './people-detail/pac/pac.component';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  declarations: [PeopleListComponent, PacComponent]
})
export class PeopleModule { }
