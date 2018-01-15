import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantillaejPage } from '../plantillaej/plantillaej';

/**
 * Generated class for the TricepsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-triceps',
  templateUrl: 'triceps.html',
})
export class TricepsPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {
        'title': 'Press Francés en Banco Plano con Barra',
        'img': 'triceps00.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Press Francés en Banco Plano con Mancuerna',
        'img': 'triceps01.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Press Francés con Polea',
        'img': 'triceps02.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Extensión de Triceps en Polea Alta',
        'img': 'triceps03.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Extensión de Triceps en Polea Alta Manos en Supinación',
        'img': 'triceps04.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Extensión de Triceps Alternada en Polea',
        'img': 'triceps05.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Extensión de Triceps Vertical Alternada',
        'img': 'triceps06.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Extensión de Triceps a dos Manos con Mancuerna',
        'img': 'triceps07.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Extensión de Triceps con Barra',
        'img': 'triceps08.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Extensión de Codo con Mancuerna',
        'img': 'triceps09.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TricepsPage');
  }

  itemSelected(item){
    this.navCtrl.push(PlantillaejPage, { item:item });
  }

}
