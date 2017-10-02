import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndivPhonePage } from './indiv-phone';

@NgModule({
  declarations: [
    IndivPhonePage,
  ],
  imports: [
    IonicPageModule.forChild(IndivPhonePage),
  ],
})
export class IndivPhonePageModule {}
