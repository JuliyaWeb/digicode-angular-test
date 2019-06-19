import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICampaignData, IGuidelineData} from '../interfaces/content-data.interface';
import {campaignContent, guidelinesContent} from '../mocks/db.mock';

@Injectable()
export class ContentDataService {

  constructor(private http: HttpClient) {
  }

  getCampaignData(): Observable<ICampaignData> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(campaignContent);
        observer.complete();
      }, 500);
    });
  }

  getGuidelinesContentData(): Observable<IGuidelineData> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(guidelinesContent);
        observer.complete();
      }, 500);
    });
  }
}
