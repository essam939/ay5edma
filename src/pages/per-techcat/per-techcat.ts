import { PerTechreqPage } from './../per-techreq/per-techreq';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerTechcatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-per-techcat',
  templateUrl: 'per-techcat.html',
})
export class PerTechcatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerTechcatPage');
  }
  goreq(){
    this.navCtrl.push(PerTechreqPage);
  }
}
