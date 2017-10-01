import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerHotelsPage } from './per-hotels';

@NgModule({
  declarations: [
    PerHotelsPage,
  ],
  imports: [
    IonicPageModule.forChild(PerHotelsPage),
  ],
})
export class PerHotelsPageModule {}
