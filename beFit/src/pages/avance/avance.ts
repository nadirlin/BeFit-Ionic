import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvancesService } from '../../services/avances.service';
import { AvanceinfPage } from '../avanceinf/avanceinf';

/**
 * Generated class for the AvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avance',
  templateUrl: 'avance.html',
})
export class AvancePage {
  avances = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public avancesService : AvancesService) {
    avancesService.getAvances()
      .valueChanges().subscribe(avances => {
        console.log(avances)
        this.avances = avances;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvancePage');
  }

  public goToDetalle(id){
    this.navCtrl.push(AvanceinfPage, {id:id});
  }

  public crearAvance(id){
    this.navCtrl.push(AvanceinfPage, {id:0});
  }

}
