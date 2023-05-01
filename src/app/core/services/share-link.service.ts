import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShareLinkService {

  constructor(private _snackBar: MatSnackBar) { }

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
      this._snackBar.open('Copied to clipboard', 'Close', {
        duration: 3000,
        panelClass: ['theme-snackbar']
      });
    }
  }
}
