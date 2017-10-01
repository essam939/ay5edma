import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServRequestsPage } from './serv-requests';

@NgModule({
  declarations: [
    ServRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(ServRequestsPage),
  ],
})
export class ServRequestsPageModule {}
