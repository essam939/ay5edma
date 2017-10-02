import { ServChatPageModule } from './../pages/serv-chat/serv-chat.module';
import { ServRequestsPageModule } from './../pages/serv-requests/serv-requests.module';
import { ServAddservicePageModule } from './../pages/serv-addservice/serv-addservice.module';
import { ServHomePageModule } from './../pages/serv-home/serv-home.module';
import { ServSignipindusPageModule } from './../pages/serv-signipindus/serv-signipindus.module';
import { ServSignupPageModule } from './../pages/serv-signup/serv-signup.module';
import { PerTechratePageModule } from './../pages/per-techrate/per-techrate.module';
import { PerTechreqPageModule } from './../pages/per-techreq/per-techreq.module';
import { PerRealdetailsPageModule } from './../pages/per-realdetails/per-realdetails.module';
import { PerRestdetailsPageModule } from './../pages/per-restdetails/per-restdetails.module';
import { ForgetpasswordPageModule } from './../pages/forgetpassword/forgetpassword.module';
import { SignupPageModule } from './../pages/signup/signup.module';
import { LoginPageModule } from './../pages/login/login.module';
import { WelcomePageModule } from './../pages/welcome/welcome.module';
import { PerTechcatPageModule } from './../pages/per-techcat/per-techcat.module';
import { PerHomePageModule } from './../pages/per-home/per-home.module';
import { PerSignupPageModule } from './../pages/per-signup/per-signup.module';
import { PerLocationPageModule } from './../pages/per-location/per-location.module';
import { PerMapPageModule } from './../pages/per-map/per-map.module';
import { PerSellPageModule } from './../pages/per-sell/per-sell.module';
import { PerRealestatePageModule } from './../pages/per-realestate/per-realestate.module';
import { PerRestPageModule } from './../pages/per-rest/per-rest.module';
import { PerHotelsPageModule } from './../pages/per-hotels/per-hotels.module';
import { PerOtherPageModule } from './../pages/per-other/per-other.module';
import { PerItemdetailsPageModule } from './../pages/per-itemdetails/per-itemdetails.module';
import { PerHoteldetailsPageModule } from './../pages/per-hoteldetails/per-hoteldetails.module';
import { PerTechniciansPageModule } from './../pages/per-technicians/per-technicians.module';
import { PerTechlocationPageModule } from './../pages/per-techlocation/per-techlocation.module';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PerTechlocationPageModule,
    PerTechniciansPageModule,
    PerHoteldetailsPageModule,
    PerItemdetailsPageModule,
    PerOtherPageModule,
    PerHotelsPageModule,
    PerRestPageModule,
    PerRealestatePageModule,
    PerSellPageModule,
    PerMapPageModule,
    PerLocationPageModule,
    PerSignupPageModule,
    PerHomePageModule,
    PerTechcatPageModule,
    WelcomePageModule,
    LoginPageModule,
    SignupPageModule,
    ForgetpasswordPageModule,
    PerRestdetailsPageModule,
    PerRealdetailsPageModule,
    PerTechreqPageModule,
    PerTechratePageModule,
    ServSignupPageModule,
    ServSignipindusPageModule,
    ServHomePageModule,
    ServAddservicePageModule,
    ServRequestsPageModule,
    ServChatPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
   

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
