import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerLocationPage } from './per-location';

@NgModule({
  declarations: [
    PerLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(PerLocationPage),
  ],
})
export class PerLocationPageModule {}
