import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantillaejPage } from '../plantillaej/plantillaej';

/**
 * Generated class for the PectoralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pectoral',
  templateUrl: 'pectoral.html',
})
export class PectoralPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {
        'title': 'Press de Banca Plano',
        'img': 'pecho00.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Press de Banca Inclinado',
        'img': 'pecho01.jpg',
        'description': 'Posición: Sentado sobre una banca inclinada con los pies en el suelo.',
      },
      {
        'title': 'Press de Banca Declinado',
        'img': 'pecho02.jpg',
        'description': 'Posición: Acostado en un banco declinado, con los pies fijos en el soporte del banco.',
      },
      {
        'title': 'Press de Banca Manos Juntas',
        'img': 'pecho04.jpg',
        'description': 'Acostado boca arriba sobre un banco plano, con los pies en el suelo.',
      },
      {
        'title': 'Apertura con Mancuernas Banco Plano',
        'img': 'pecho05.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo.',
      },
      {
        'title': 'Apertura con Mancuernas Banco Inclinado',
        'img': 'pecho06.jpg',
        'description': 'Posición: Sentado sobre un banco inclinado, con los pies en el suelo.',
      },
      {
        'title': 'Apertura en Contractor de Pecho',
        'img': 'pecho07.jpg',
        'description': 'Posición: Sentado en el contractor de pecho con los pies sobre los apoyos y las manos tomando los grips.',
      },
      {
        'title': 'Fondos en Barras Paralelas',
        'img': 'pecho08.jpg',
        'description': 'Posición: Sobre unas barras paralelas apoyarse con los brazos extendidos y piernas levemente flexionadas en el aire.',
      },
      {
        'title': 'Pull Over con Mancuerna',
        'img': 'pecho09.jpg',
        'description': 'Posición: Apoyar unicamente la espalda en un banco plano que estará en posición transversal al cuerpo.',
      },
      {
        'title': 'Pull Over con Barra',
        'img': 'pecho10.jpg',
        'description': 'Posición: Apoyar unicamente la espalda en un banco plano que estará en posición transversal al cuerpo.',
      },
      {
        'title': 'Press con Mancuerna en Banco Inclinado',
        'img': 'pecho11.jpg',
        'description': 'Posición: Sentados sobre un banco inclinado con los pies en el suelo.',
      },
      {
        'title': 'Press con Mancuerna en Banco Plano',
        'img': 'pecho12.jpg',
        'description': 'Posición: Acostado sobre un banco plano, con los pies en el suelo.',
      },
      {
        'title': 'Press de Barra en Máquina',
        'img': 'pecho13.jpg',
        'description': 'Posición: Sentado sobre la máquina con los pies sobre los apoyos, tomar los grips.',
      },
      {
        'title': 'Cruce con Poleas',
        'img': 'pecho14.jpg',
        'description': 'Posición: De pie sujetando los grips con las poleas en una posición elevada, piernas separadas y el tronco ligeramente inclinado hacia adelante.',
      },
      {
        'title': 'Flexiones de Brazo en el Suelo ',
        'img': 'pecho15.jpg',
        'description': 'Posición: Manos sobre el piso, con los brazos extendidos a la altura de los hombros, pies juntos estirados, evitando curvar demasiado la región lumbar.',
      }
      
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PectoralPage');
  }

  itemSelected(item){
    this.navCtrl.push(PlantillaejPage, { item:item });
  }

}
