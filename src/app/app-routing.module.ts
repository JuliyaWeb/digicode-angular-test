import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuidelinesComponent} from './views/guidelines/guidelines.component';
import {CampaignComponent} from './views/campaign/campaign.component';

const routes: Routes = [
  { path: '', redirectTo: '/campaign', pathMatch: 'full' },
  { path: 'campaign', component:  CampaignComponent},
  { path: 'guidelines', component:  GuidelinesComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
