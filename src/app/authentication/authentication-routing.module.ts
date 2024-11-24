import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthURL } from './authen.url';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: AuthURL.Main,
    pathMatch: 'full',
  },
  {
    path: AuthURL.Main,
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
