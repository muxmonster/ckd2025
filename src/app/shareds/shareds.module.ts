import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthContentComponent,
    AuthNavbarComponent,
    AuthSidebarComponent,
  ],
  exports: [AuthContentComponent, AuthNavbarComponent, AuthSidebarComponent],
})
export class SharedsModule {}
