import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PacComponent } from './people-detail/pac/pac.component';
import { BoomComponent } from './people-detail/boom/boom.component';
import { NookComponent } from './people-detail/nook/nook.component';
import { SuayComponent } from './people-detail/suay/suay.component';

export const peopleRoutes: Routes = [
  {
    path: 'list',
    component: PeopleListComponent
  },
  {
    path: 'pac',
    component: PacComponent
  },
  {
    path: 'boom',
    component: BoomComponent
  },
  {
    path: 'nook',
    component: NookComponent
  },
  {
    path: 'suay',
    component: SuayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(peopleRoutes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {
}
