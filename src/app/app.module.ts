import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {MatTabsModule} from '@angular/material';
import {CampaignComponent} from './views/campaign/campaign.component';
import {GuidelinesComponent} from './views/guidelines/guidelines.component';
import {ContentDataService} from './shared/services/content-data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    MatTabsModule,
    SharedModule
  ],
  providers: [ContentDataService],
  declarations: [AppComponent,    CampaignComponent,
    GuidelinesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
