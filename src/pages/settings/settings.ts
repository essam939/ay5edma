import { TermsPage } from './../terms/terms';
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  about(){
    this.navCtrl.push(AboutPage);
  }
  terms(){ this.navCtrl.push(TermsPage);}
  signout(){

  }
}
