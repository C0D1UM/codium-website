import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { portfolioRoutes } from './portfolio/portfolio-routing.module';
import { ContactComponent } from './contact/contact.component';
import { peopleRoutes } from './people/people-routing.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'portfolio',
    children: [
      ...portfolioRoutes
    ]
  },
  {
    path: 'people',
    children: [
      ...peopleRoutes
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
