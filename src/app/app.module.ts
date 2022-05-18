import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CodeSitesComponent } from './code-sites/code-sites.component';
import { FormsModule } from '@angular/forms';
import { CodeSiteDetailComponent } from './code-site-detail/code-site-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [AppComponent, CodeSitesComponent, CodeSiteDetailComponent, HomepageComponent, DetailsComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
