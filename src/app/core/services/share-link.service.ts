import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareLinkService {


  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async copyToClipboard(url: string) {
      navigator.clipboard.writeText(url);
  }



  shareLink(url: string) {
    if (navigator.share) {
      navigator.share({
        title: 'URL Shortener',
        text: 'Share the shortened URL',
        url: url
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Share is not supported');
      this.copyToClipboard(url);
    }
  }
}
