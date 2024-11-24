import { Component } from '@angular/core';
import { SharedsModule } from '../../../shareds/shareds.module';

@Component({
  selector: 'app-main',
  imports: [SharedsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
