import { Component, EventEmitter, Output } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-auth-sidebar',
  imports: [MatSidenavModule, MatDivider, MatListModule, RouterModule],
  templateUrl: './auth-sidebar.component.html',
  styleUrl: './auth-sidebar.component.scss',
})
export class AuthSidebarComponent {
  @Output('close') navClose = new EventEmitter();

  onCloseSideBar() {
    this.navClose.emit();
  }
}
