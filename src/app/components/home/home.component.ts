import { Component } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';
import { ShareLinkService } from 'src/app/core/services/share-link.service';
import { ShortenService } from 'src/app/core/services/shorten.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'url-shortener-frontend-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isLoading = false;
  longUrl = '';
  shortUrl = '';
  constructor(private shortenService: ShortenService, private shareLinkService: ShareLinkService) {}

  shortenUrl() {
    this.isLoading = true;
    console.log('URL: ', this.longUrl);
    this.shortenService
      .getShortUrl(this.longUrl)
      .pipe(
        catchError((error) => {
          console.log('Error: ', error);
          return of (null);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((response) => {
        console.log('Short URL: ', response);
        if(response){
          this.shortUrl = `${environment.backendUrl}/${response.shortUrl}`;
        }
      });
  }
  reset(){
    this.shortUrl = '';
    this.longUrl = '';
  }
  shareLink(){
    if(this.shortUrl){
      this.shareLinkService.shareLink(this.shortUrl);
    }
  }
}
