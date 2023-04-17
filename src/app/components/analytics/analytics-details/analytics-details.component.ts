import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnalyticsUrl } from 'src/app/core/models/analytics-url';
@Component({
  selector: 'url-shortener-frontend-analytics-details',
  templateUrl: './analytics-details.component.html',
  styleUrls: ['./analytics-details.component.scss'],
})
export class AnalyticsDetailsComponent {
  emptyAnalyticsUrl: AnalyticsUrl = {
    longUrl: '',
    shortUrl: '',
    clicks: 0,
    browser: [],
  };

  @Input() analyticsUrl: AnalyticsUrl = this.emptyAnalyticsUrl;
  @Output() closeWindow = new EventEmitter();

}
