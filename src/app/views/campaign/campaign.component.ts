import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContentDataService} from '../../shared/services/content-data.service';
import {ICampaignData} from '../../shared/interfaces/content-data.interface';
import {Subscription} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit, OnDestroy {
  campaign: ICampaignData;
  private subTaskLists: Subscription;

  constructor(private dataService: ContentDataService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.initContentData();
  }

  ngOnDestroy() {
    if (this.subTaskLists) {
      this.subTaskLists.unsubscribe();
    }
  }

  initContentData(): void {
    this.subTaskLists = this.dataService.getCampaignData()
      .subscribe((data: ICampaignData) => this.campaign = data);
  }

  getVideoUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
