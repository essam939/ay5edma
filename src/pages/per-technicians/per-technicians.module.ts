import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerTechniciansPage } from './per-technicians';

@NgModule({
  declarations: [
    PerTechniciansPage,
  ],
  imports: [
    IonicPageModule.forChild(PerTechniciansPage),
  ],
})
export class PerTechniciansPageModule {}
