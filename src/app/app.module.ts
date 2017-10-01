import { PerTechratePage } from './../pages/per-techrate/per-techrate';
import { PerTechreqPage } from './../pages/per-techreq/per-techreq';
import { PerHoteldetailsPage } from './../pages/per-hoteldetails/per-hoteldetails';
import { PerRealdetailsPage } from './../pages/per-realdetails/per-realdetails';
import { PerRestdetailsPage } from './../pages/per-restdetails/per-restdetails';
import { ForgetpasswordPage } from './../pages/forgetpassword/forgetpassword';
import { PerSignupPage } from './../pages/per-signup/per-signup';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { WelcomePage } from './../pages/welcome/welcome';
import { PerTechcatPage } from './../pages/per-techcat/per-techcat';
import { PerHomePage } from './../pages/per-home/per-home';
import { PerLocationPage } from './../pages/per-location/per-location';
import { PerMapPage } from './../pages/per-map/per-map';
import { PerSellPage } from './../pages/per-sell/per-sell';
import { PerRealestatePage } from './../pages/per-realestate/per-realestate';
import { PerRestPage } from './../pages/per-rest/per-rest';
import { PerHotelsPage } from './../pages/per-hotels/per-hotels';
import { PerOtherPage } from './../pages/per-other/per-other';
import { PerItemdetailsPage } from './../pages/per-itemdetails/per-itemdetails';
import { PerTechniciansPage } from './../pages/per-technicians/per-technicians';
import { PerTechlocationPage } from './../pages/per-techlocation/per-techlocation';
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
    HomePage,
    PerTechlocationPage,
    PerTechniciansPage,
    PerHoteldetailsPage,
    PerItemdetailsPage,
    PerOtherPage,
    PerHotelsPage,
    PerRestPage,
    PerRealestatePage,
    PerSellPage,
    PerMapPage,
    PerLocationPage,
    PerSignupPage,
    PerHomePage,
    PerTechcatPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    ForgetpasswordPage,
    PerRestdetailsPage,
    PerRealdetailsPage,
    PerTechreqPage,
    PerTechratePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerTechlocationPage,
    PerTechniciansPage,
    PerHoteldetailsPage,
    PerItemdetailsPage,
    PerOtherPage,
    PerHotelsPage,
    PerRestPage,
    PerRealestatePage,
    PerSellPage,
    PerMapPage,
    PerLocationPage,
    PerSignupPage,
    PerHomePage,
    PerTechcatPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    ForgetpasswordPage,
    PerRestdetailsPage,
    PerRealdetailsPage,
    PerTechreqPage,
    PerTechratePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
