import { Component, OnInit } from '@angular/core';
import { of, catchError, map } from 'rxjs';
import { AnalyticsUrl } from 'src/app/core/models/analytics-url';
import { AnalyticsService } from 'src/app/core/services/analytics.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'url-shortener-frontend-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  analyticsUrls: AnalyticsUrl[] = [];
  emptyAnalyticsUrl: AnalyticsUrl = {
    longUrl: '',
    shortUrl: '',
    clicks: 0,
    browser: [],
  };
  selectedUrl: AnalyticsUrl = this.emptyAnalyticsUrl;

  constructor(private analyticsService: AnalyticsService) {}

  fetchAnalytics() {
    this.analyticsService
      .getAnalytics()
      .pipe(
        catchError((error) => {
          console.log('Error: ', error);
          return of(null);
        }),
        map((data) => {
          if (data) {
            console.log('DATA: ', data);
            data.map(
              (urlObject: AnalyticsUrl) => (urlObject.shortUrl = `${environment.backendUrl}/${urlObject.shortUrl}`)
            );
          }
          return data;
        })
      )
      .subscribe((data) => {
        this.analyticsUrls = data;
      });
  }

  ngOnInit() {
    this.fetchAnalytics();
  }

  selectUrl(url: AnalyticsUrl) {
    console.log('SELECTED URL: ', url);
    this.selectedUrl = url;
  }
  closeDetails() {
    this.selectedUrl = this.emptyAnalyticsUrl;
  }
}
