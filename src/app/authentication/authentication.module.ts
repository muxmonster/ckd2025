import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedsModule } from '../shareds/shareds.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationRoutingModule, SharedsModule],
})
export class AuthenticationModule {}
