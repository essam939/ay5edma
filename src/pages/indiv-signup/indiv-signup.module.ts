import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndivSignupPage } from './indiv-signup';

@NgModule({
  declarations: [
    IndivSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(IndivSignupPage),
  ],
})
export class IndivSignupPageModule {}
