import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvancesService } from '../../services/avances.service';

/**
 * Generated class for the AvanceinfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avanceinf',
  templateUrl: 'avanceinf.html',
})
export class AvanceinfPage {
  avance:any = { id: null, titulo: null, fecha: null, peso: null, cintura: null, biceps: null };
  //avance = {};
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public avancesService: AvancesService) {
    this.id = navParams.get('id');
    if (this.id != 0) {
      //this.avance = avancesService.getAvance(this.id);
      avancesService.getAvance(this.id)
        .valueChanges().subscribe(avance => {
          this.avance = avance;
        });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvanceinfPage');
  }

  guardarAvance() {
    if (this.id != 0) {
      //Estamos editando
      this.avancesService.editarAvance(this.avance);
      alert('¡Dato Avance editada con éxito!');
    } else {
      this.avance.id = Date.now();
      this.avancesService.crearAvance(this.avance);
      alert('¡Dato Avance creado con éxito!');
    }
    this.navCtrl.pop();
  }

  eliminarAvance() {
    this.avancesService.eliminarAvance(this.avance);
    alert('¡Dato Avance eliminado con éxito!');
    this.navCtrl.pop();
  }

}
