import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-auth-navbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
  ],
  templateUrl: './auth-navbar.component.html',
  styleUrl: './auth-navbar.component.scss',
})
export class AuthNavbarComponent {
  @Input('medie_query') mobileQueryMax: boolean | undefined;
  @Output('toggle') navToggle = new EventEmitter();

  demoMailNoti = 50;
  demoNoti = 9;

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  onNavToggle() {
    this.navToggle.emit();
  }
}
