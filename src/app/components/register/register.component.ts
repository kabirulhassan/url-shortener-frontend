import { Component } from '@angular/core';

@Component({
  selector: 'url-shortener-frontend-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email = '';
  password = '';
  fullName = '';
  constructor() {}
  register() {
  }
}
