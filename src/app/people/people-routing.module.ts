import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';

export const peopleRoutes: Routes = [
  {
    path: 'list',
    component: PeopleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(peopleRoutes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
