import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantillaejPage } from '../plantillaej/plantillaej';

/**
 * Generated class for the TresdiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tresdias',
  templateUrl: 'tresdias.html',
})
export class TresdiasPage {

  items = [];
  itemsdos = [];
  itemstres = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': 'Press Banca Inclinado',
        'img': 'pecho01.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Press Banca Declinado',
        'img': 'pecho02.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Press de Banca Plano',
        'img': 'pecho00.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Apertura con Mancuernas Banco Plano',
        'img': 'pecho04.jpg',
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
        'title': 'Elevaciones del Tronco en Suspención',
        'img': 'abdomen09.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      }
    ]

    this.itemsdos = [
      {
        'title': 'Press Trasnuca con Barra',
        'img': 'hombro00.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Press Frontal con Barra',
        'img': 'hombro01.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Elevaciones Laterales de los Brazos con Mancuerna',
        'img': 'hombro04.png',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Extensiones',
        'img': 'pierna02.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Curl de Piernas Acostado',
        'img': 'pierna04.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
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
        'title': 'Elevación de Talones de Pie en Máquina',
        'img': 'pierna11.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      }
    ]

    this.itemstres = [
      {
        'title': 'Remo en Barra T con Apoyo al Pecho',
        'img': 'espalda07.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Polea al Pecho',
        'img': 'espalda00.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Peso Muerto',
        'img': 'espalda12.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Press Francés con Polea',
        'img': 'triceps02.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Extensión de Tríceps en Polea Alta',
        'img': 'triceps03.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Abdominales con Rueda',
        'img': 'abdomen18.png',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TresdiasPage');
  }

  itemSelected(item){
    this.navCtrl.push(PlantillaejPage, { item:item });
  }

}
