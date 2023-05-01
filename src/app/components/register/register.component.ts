import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'url-shortener-frontend-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email = '';
  password = '';
  fullName = '';
  showWarning = false;
  constructor(private authService: AuthService) {}
  register() {
    if(!this.fullName || !this.email || !this.password){
      this.showWarning = true;
      return;
    }
    this.authService.register(this.fullName, this.email, this.password);
  }
}
