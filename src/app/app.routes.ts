import { Routes } from '@angular/router';
import { AppURL } from './app.url';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: AppURL.Login, pathMatch: 'full' },
  { path: AppURL.Login, component: LoginComponent },
  {
    path: AppURL.Authen,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];
