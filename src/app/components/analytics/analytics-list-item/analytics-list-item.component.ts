import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnalyticsUrl } from 'src/app/core/models/analytics-url';

@Component({
  selector: 'url-shortener-frontend-analytics-list-item',
  templateUrl: './analytics-list-item.component.html',
  styleUrls: ['./analytics-list-item.component.scss'],
})
export class AnalyticsListItemComponent {
  emptyAnalyticsUrl: AnalyticsUrl = {
    longUrl: '',
    shortUrl: '',
    clicks: 0,
    browser: [],
  };

  @Input()  analtyicsUrl: AnalyticsUrl =  this.emptyAnalyticsUrl;
  @Output() selected = new EventEmitter();
}
