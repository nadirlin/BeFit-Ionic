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
        'description': 'Posición: De pie con las piernas abiertas, situar la barra sobre los trapecios más arriba del hombro posterior. Coger la barra con las manos a una separación que se acomode al movimiento y tirar los codos hacia atrás.',
      },
      {
        'title': 'Prensa',
        'img': 'pierna01.jpg',
        'description': 'Posición: Cologados sobre la máquina, con los pies sobre la plataforma separados al nivel de la cadera y la espalda bien apoyada en el respaldo.',
      },
      {
        'title': 'Extensiones',
        'img': 'pierna02.jpg',
        'description': 'Posición: Sentado en la máquina, con ambos pies debajo de los rodillos, manos agarrando los apoyos y espalda inmovil contra el respaldo.',
      },
      {
        'title': 'Sentadilla Frontal',
        'img': 'pierna03.jpg',
        'description': 'Posición: Barra colocada sobre los deltoides anteriores, brazos cruzados en posición horizontal con las manos sobre la barra o también con los brazos en posición horizontal con las manos en pronación, mirada hacia adelante.',
      },
      {
        'title': 'Curl de Pierna Acostado',
        'img': 'pierna04.jpg',
        'description': 'Posición: Acostado boca abajo con las manos en los agarres, tobillos ajustados en los cogines con las piernas estiradas.',
      },
      {
        'title': 'Flexión de Rodillas con Mancuerna',
        'img': 'pierna05.jpg',
        'description': 'Posición: De pie, con los pies levemente separados y con una mancuerna en cada mano.',
      },
      {
        'title': 'Sentadilla Hack',
        'img': 'pierna06.jpg',
        'description': 'Posición: Espalda contra el respaldo, rodillas ligeramente flexionadas, hombros en los cogines y pies separados.',
      },
      {
        'title': 'Curl de Pierna Alterna de Pie en Máquina',
        'img': 'pierna07.jpg',
        'description': 'Posición: De pie, con el tronco apoyado en el soporte, rodilla fijada, pierna en extensión, tobillo fijado bajo el cogin.',
      },
      {
        'title': 'Flexión de Tronco al Frente',
        'img': 'pierna08.jpg',
        'description': 'Posición: De pie, con los pies ligeramente separados, barra apoyada sobre los trapecios o sobre los deltoides posteriores.',
      },
      {
        'title': 'Aductores en Máquina',
        'img': 'pierna09.png',
        'description': 'Posición: Sentado en la máquina con las piernas separadas. Ejecución: Juntar los muslos, luego volver a la posición inicial controlando el movimiento.',
      },
      {
        'title': 'Aductores en Polea Baja',
        'img': 'pierna10.jpg',
        'description': 'Posición: De pie, apoyado sobre una pierna, la otra atada a la correa en la polea, con la manos opuesta apoyada para dar en equilibrio.',
      },
      {
        'title': 'Elevación de Talones en Pie en Máquina',
        'img': 'pierna11.jpg',
        'description': 'Posición: De pie con la espalda recta, los hombros bajo los cogines y con la punta de los pies en el soporte.',
      },
      {
        'title': 'Elevación de Talon con Mancuerna',
        'img': 'pierna12.jpg',
        'description': 'Posición: De pie, apoyado sobre una pierna, la punta del pie apoyado sobre una cuña, una mano con una mancuerna y la otra apoyada sobre un soporte para conseguir un mejor equilibrio.',
      },
      {
        'title': 'Extensión de Talones Sentado en Máquina ',
        'img': 'pierna13.jpg',
        'description': 'Posición: Sentado en un banco, muslos sobre el asiento, la punta de los pies en el soporte.',
      },
      {
        'title': 'Elevación de Talones Sentado con Barra',
        'img': 'pierna14.jpg',
        'description': 'Posición: Sentado en la máquina, barra apoyada sobre los muslos, la punta de los pies sobre una cuña.',
      },
      {
        'title': 'Peso Muerto con Piernas Extendidas',
        'img': 'pierna15.jpg',
        'description': 'Posición: Agachado, tronco inclinado hacia adelante, espalda recta, piernas al ancho de los hombros, manos en pronación, brazos extendidos sujetando la barra al ancho de los hombros.',
      },
      {
        'title': 'Pantorrila en Máquina',
        'img': 'pierna16.jpg',
        'description': 'Posición: Colocados sobre la máquina, con la punta de los pies sobre la plataforma separadas al nivel de la cadera y la espalda bien apoyada en el respaldo.',
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
