import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndivCertificatePage } from './indiv-certificate';

@NgModule({
  declarations: [
    IndivCertificatePage,
  ],
  imports: [
    IonicPageModule.forChild(IndivCertificatePage),
  ],
})
export class IndivCertificatePageModule {}
