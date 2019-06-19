import {Component, OnDestroy, OnInit} from '@angular/core';
import {IGuidelineData} from '../../shared/interfaces/content-data.interface';
import {Subscription} from 'rxjs';
import {ContentDataService} from '../../shared/services/content-data.service';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit, OnDestroy {
  guidelines: IGuidelineData;
  private subTaskLists: Subscription;

  constructor(private dataService: ContentDataService) {
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
    this.subTaskLists = this.dataService.getGuidelinesContentData()
      .subscribe((data: IGuidelineData) => this.guidelines = data);
  }
}
