import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const peopleRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(peopleRoutes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
