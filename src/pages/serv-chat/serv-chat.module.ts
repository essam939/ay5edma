import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServChatPage } from './serv-chat';

@NgModule({
  declarations: [
    ServChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ServChatPage),
  ],
})
export class ServChatPageModule {}
