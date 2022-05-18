import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeSiteDetailComponent } from './code-site-detail/code-site-detail.component';
import { CodeSitesComponent } from './code-sites/code-sites.component';
import { HomepageComponent } from './homepage/homepage.component'
import { DetailsComponent } from './details/details.component'
	
const routes: Routes = [
  { path: 'codesites', component: CodeSitesComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }
]
	
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
