import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnalyticsUrl } from 'src/app/core/models/analytics-url';
import { ShareLinkService } from 'src/app/core/services/share-link.service';
@Component({
  selector: 'url-shortener-frontend-analytics-details',
  templateUrl: './analytics-details.component.html',
  styleUrls: ['./analytics-details.component.scss'],
})
export class AnalyticsDetailsComponent {
  constructor(private shareLinkService: ShareLinkService) {}
  emptyAnalyticsUrl: AnalyticsUrl = {
    longUrl: '',
    shortUrl: '',
    clicks: 0,
    browser: [],
  };


  @Input() analyticsUrl: AnalyticsUrl = this.emptyAnalyticsUrl;
  @Output() closeWindow = new EventEmitter();

  shareLink(urlLink: string) {
    if (urlLink) {
      this.shareLinkService.shareLink(urlLink);
    }
  }

}
