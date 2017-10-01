import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServHomePage } from './serv-home';

@NgModule({
  declarations: [
    ServHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ServHomePage),
  ],
})
export class ServHomePageModule {}
