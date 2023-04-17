import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShortUrl } from '../models/short-url';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ShortenService {
  constructor(private apiService: ApiService) {}

  getShortUrl(longUrl: string): Observable<ShortUrl> {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      // if the user is logged in, the url must be saved with an user id
      return this.apiService.post<ShortUrl>('/shorten', { longUrl }, config);
    }
    return this.apiService.post<ShortUrl>('/shorten', { longUrl });
  }
}
