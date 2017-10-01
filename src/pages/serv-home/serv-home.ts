import { ServRequestsPage } from './../serv-requests/serv-requests';
import { ServAddservicePage } from './../serv-addservice/serv-addservice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serv-home',
  templateUrl: 'serv-home.html',
})
export class ServHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServHomePage');
  }
  servreq(){
    this.navCtrl.push(ServRequestsPage);
  }
  addservice(){
    this.navCtrl.push(ServAddservicePage)
  }
}