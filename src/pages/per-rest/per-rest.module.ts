import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerRestPage } from './per-rest';

@NgModule({
  declarations: [
    PerRestPage,
  ],
  imports: [
    IonicPageModule.forChild(PerRestPage),
  ],
})
export class PerRestPageModule {}
