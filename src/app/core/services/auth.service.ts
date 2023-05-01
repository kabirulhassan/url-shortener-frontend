import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  // isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService: ApiService, private router: Router, private _snackBar: MatSnackBar) {
    // this.validateExpiration();
    // const accessToken = localStorage.getItem('accessToken');
    // this._isLoggedIn$.next(!!accessToken);
  }

  login(email: string, password: string) {
    const body = {email, password};
    console.log('Body: ', body);
    return this.apiService.post('/users/login', body)
    .pipe(
      catchError((err) => {
        console.log('Error: ', err);
        this._snackBar.open('Invalid email or password', 'Close', {
          duration: 3000
        });
        return of(err);
      })
    )
    .subscribe(
      (res) => {
        console.log('Response: ', res);
        if(res.accessToken) {
          console.log('Access Token: ', res.accessToken);
          localStorage.setItem('accessToken', res.accessToken);
          // this._isLoggedIn$.next(true);
          this._snackBar.open('Login successful', 'Close', {
            duration: 3000,
            panelClass: ['theme-snackbar']
          });
          this.router.navigate(['/']);
        }
      }
    );
  }
  logout() {
    localStorage.removeItem('accessToken'); // For some reason, removing the item doesn't work
    this.router.navigate(['/']);
    this._snackBar.open('Logged Out', 'Close',{
      duration: 3000,
      panelClass: ['theme-snackbar']
    });
    // this._isLoggedIn$.next(false);
  }

  isAuthenticated() {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken;
  }

  validateExpiration(accessToken: string) {
    // TODO: Implement this in the future
    // if(accessToken) {
    //   const isExpired = this.jwtHelper.isTokenExpired(accessToken);
    //   if(isExpired) {
    //     this.logout();
    //   }
    // }

}
}
