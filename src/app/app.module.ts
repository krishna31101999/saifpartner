import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ReachusComponent } from './reachus/reachus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortfolioComponent,
    TeamComponent,
    AboutComponent,
    NewsComponent,
    ReachusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
