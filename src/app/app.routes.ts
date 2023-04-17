import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Curt',
    },
    {
      path: 'analytics',
      component: AnalyticsComponent,
      title: 'Analytics',
      canActivate: [AuthGuard],
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'Login',
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: '**',
      redirectTo: '',
    }
  ];

export const appRoutes: Routes = routes;
