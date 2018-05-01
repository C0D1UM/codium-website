import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PttIctComponent } from './ptt-ict/ptt-ict.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  declarations: [
    PttIctComponent,
    PortfolioListComponent
  ]
})
export class PortfolioModule { }
