import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantillaejPage } from '../plantillaej/plantillaej';

/**
 * Generated class for the PiernaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pierna',
  templateUrl: 'pierna.html',
})
export class PiernaPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': 'Sentadillas',
        'img': 'pierna00.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Prensa',
        'img': 'pierna01.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Extensiones',
        'img': 'pierna02.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Sentadilla Frontal',
        'img': 'pierna03.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Curl de Pierna Acostado',
        'img': 'pierna04.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Flexión de Rodillas con Mancuerna',
        'img': 'pierna05.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Sentadilla Hack',
        'img': 'pierna06.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Curl de Pierna Alterna de Pie en Máquina',
        'img': 'pierna07.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Flexión de Tronco al Frente',
        'img': 'pierna08.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Aductores en Máquina',
        'img': 'pierna09.png',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Aductores en Polea Baja',
        'img': 'pierna10.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Elevación de Talones en Pie en Máquina',
        'img': 'pierna11.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Elevación de Talon con Mancuerna',
        'img': 'pierna12.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Extensión de Talones Sentado en Máquina ',
        'img': 'pierna13.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Elevación de Talones Sentado con Barra',
        'img': 'pierna14.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Peso Muerto con Piernas Extendidas',
        'img': 'pierna15.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Pantorrila en Máquina',
        'img': 'pierna16.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      }
      
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PiernaPage');
  }

  itemSelected(item){
    this.navCtrl.push(PlantillaejPage, { item:item });
  }

}
