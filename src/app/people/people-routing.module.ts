import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PacComponent } from './people-detail/pac/pac.component';

export const peopleRoutes: Routes = [
  {
    path: 'list',
    component: PeopleListComponent
  },
  {
    path: 'pac',
    component: PacComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(peopleRoutes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
