import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TresdiasPage } from '../tresdias/tresdias';
import { CuatrodiasPage } from '../cuatrodias/cuatrodias';
import { CincodiasPage } from '../cincodias/cincodias';

/**
 * Generated class for the RutinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rutina',
  templateUrl: 'rutina.html',
})
export class RutinaPage {

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutinaPage');
  }

  tresdias(){
    this.navCtrl.push(TresdiasPage);
  }

  cuatrodias(){
    this.navCtrl.push(CuatrodiasPage);
  }

  cincodias(){
    this.navCtrl.push(CincodiasPage);
  }

}
