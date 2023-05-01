import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent } from './components/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UrlValidatorDirective } from './shared/url-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AnalyticsListItemComponent } from './components/analytics/analytics-list-item/analytics-list-item.component';
import { AnalyticsDetailsComponent } from './components/analytics/analytics-details/analytics-details.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    UrlValidatorDirective,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AnalyticsComponent,
    AnalyticsListItemComponent,
    AnalyticsDetailsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSkeletonLoaderModule,
    MatSidenavModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
