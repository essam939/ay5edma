import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerHomePage } from './per-home';

@NgModule({
  declarations: [
    PerHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PerHomePage),
  ],
})
export class PerHomePageModule {}
