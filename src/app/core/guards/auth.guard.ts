import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable,of } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private __snackBar: MatSnackBar) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      if(localStorage.getItem('accessToken')) {
        return of(true);
      }
      this.__snackBar.open('Please login to continue', 'Close', {
        duration: 3000,
        panelClass: ['theme-snackbar']
      });
      this.router.navigate(['/login']);
      return of(false);
    }

  
  
}
