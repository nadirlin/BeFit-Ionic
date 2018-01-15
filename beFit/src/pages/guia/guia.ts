import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PectoralPage } from '../pectoral/pectoral';
import { EspaldaPage } from '../espalda/espalda';
import { BicepsPage } from '../biceps/biceps';
import { TricepsPage } from '../triceps/triceps';
import { AbdomenPage } from '../abdomen/abdomen';
import { PiernaPage } from '../pierna/pierna';
import { HombroPage } from '../hombro/hombro';

/**
 * Generated class for the GuiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guia',
  templateUrl: 'guia.html',
})
export class GuiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ejpectoral(){
    this.navCtrl.push(PectoralPage);
  }

  ejespalda(){
    this.navCtrl.push(EspaldaPage);
  }

  ejbiceps(){
    this.navCtrl.push(BicepsPage);
  }

  ejtriceps(){
    this.navCtrl.push(TricepsPage);
  }

  ejhombro(){
    this.navCtrl.push(HombroPage);
  }

  ejpierna(){
    this.navCtrl.push(PiernaPage);
  }

  ejabdomen(){
    this.navCtrl.push(AbdomenPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuiaPage');
  }

}
