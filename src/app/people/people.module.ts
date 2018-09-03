import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PacComponent } from './people-detail/pac/pac.component';
import { BoomComponent } from './people-detail/boom/boom.component';
import { NookComponent } from './people-detail/nook/nook.component';
import { SuayComponent } from './people-detail/suay/suay.component';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  declarations: [PeopleListComponent, PacComponent, BoomComponent, NookComponent, SuayComponent]
})
export class PeopleModule { }
