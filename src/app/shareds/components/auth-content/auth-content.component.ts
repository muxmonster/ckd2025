import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthNavbarComponent } from '../auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from '../auth-sidebar/auth-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-auth-content',
  imports: [AuthNavbarComponent, AuthSidebarComponent, MatSidenavModule],
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.scss',
})
export class AuthContentComponent {
  mobileQueryMax: MediaQueryList | undefined;

  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQueryMax = media.matchMedia('(max-width: 600px)');
    this.mobileQueryMax?.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQueryMax?.removeEventListener(
      'change',
      this._mobileQueryListener
    );
  }
}
