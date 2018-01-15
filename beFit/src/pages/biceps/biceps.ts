import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantillaejPage } from '../plantillaej/plantillaej';

/**
 * Generated class for the BicepsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biceps',
  templateUrl: 'biceps.html',
})
export class BicepsPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': 'Curl de Bíceps Banco Scott con Barra',
        'img': 'biceps00.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Curl de Bíceps Banco Scott con Mancuerna',
        'img': 'biceps01.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Curl de Bíceps de Pie con Barra',
        'img': 'biceps02.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Curl de Bíceps de Pie con Mancuerna',
        'img': 'biceps03.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Curl de Bíceps Concentrado con Apoyo en el Muslo',
        'img': 'biceps04.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Curl de Bíceps Alterno Tipo Martillo',
        'img': 'biceps05.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Curl de Bíceps con Polea Alta',
        'img': 'biceps06.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Curl de Bíceps de Pie con Polea',
        'img': 'biceps07.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Curl de Bíceps con Mancuerna en Banco Inclinado',
        'img': 'biceps08.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Curl de Bíceps Manos en Pronación',
        'img': 'biceps09.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BicepsPage');
  }

  itemSelected(item){
    this.navCtrl.push(PlantillaejPage, { item:item });
  }

}
