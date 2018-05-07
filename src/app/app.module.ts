import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { MnFullpageModule } from 'ngx-fullpage';
import { PortfolioModule } from './portfolio/portfolio.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { PeopleModule } from './people/people.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PortfolioModule,
    PeopleModule,
    BrowserAnimationsModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
