import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PttIctComponent } from './ptt-ict/ptt-ict.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

export const portfolioRoutes: Routes = [
  {
    path: 'list',
    component: PortfolioListComponent
  },
  {
    path: 'ptt',
    component: PttIctComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(portfolioRoutes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
