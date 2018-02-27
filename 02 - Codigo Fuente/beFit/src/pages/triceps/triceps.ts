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
        'description': 'Posición: Acostado sobre un banco plano, brazos extendidos en posición vertical por encima del pecho con las manos en pronación tomando la barra, pies en el suelo.',
      },
      {
        'title': 'Press Francés en Banco Plano con Mancuerna',
        'img': 'triceps01.jpg',
        'description': 'Posición: Acostado sobre un banco plano, brazos extendidos en posición vertical por encima del pecho con las manos en posición neutra tomando las mancuernas, pies en el suelo.',
      },
      {
        'title': 'Press Francés con Polea',
        'img': 'triceps02.jpg',
        'description': 'Posición: Acostado sobre un banco plano, brazos flexionados por encima de la cabeza, manos en pronación tomando los grips de la barra, pies en el suelo. ',
      },
      {
        'title': 'Extensión de Triceps en Polea Alta',
        'img': 'triceps03.jpg',
        'description': 'Posición: De pie, pies al ancho de los hombros, brazos flexionados, manos en pronación tomando los grips con la polea alta, codos alineados con el cuerpo, espalda recta.',
      },
      {
        'title': 'Extensión de Triceps en Polea Alta Manos en Supinación',
        'img': 'triceps04.jpg',
        'description': 'Posición:  De pie, pies al ancho de los hombros, brazos flexionados, manos en supinación tomando los grips con la polea alta, codos alineados con el cuerpo, espalda recta.',
      },
      {
        'title': 'Extensión de Triceps Alternada en Polea',
        'img': 'triceps05.jpg',
        'description': 'Posición: De pie, pies al ancho de los hombros, brazos flexionados, manos en supinación tomando el grip con la polea alta, codo alineado con el cuerpo, espalda recta.',
      },
      {
        'title': 'Extensión de Triceps Vertical Alternada',
        'img': 'triceps06.jpg',
        'description': 'Posición:  De pie, pies al ancho de los hombros, brazos flexionados, mano en supinación tomando la mancuerna por detrás de la cabeza, espalda recta. ',
      },
      {
        'title': 'Extensión de Triceps a dos Manos con Mancuerna',
        'img': 'triceps07.jpg',
        'description': 'Posición: Sentado, brazos flexionados tomando la mancuerna con ambas manos por detrás de la cabeza, espalda recta..',
      },
      {
        'title': 'Extensión de Triceps con Barra',
        'img': 'triceps08.jpg',
        'description': 'Posición: Sentado, brazos flexionados tomando la barra con ambas manos por detrás de la cabeza, espalda recta.',
      },
      {
        'title': 'Extensión de Codo con Mancuerna',
        'img': 'triceps09.jpg',
        'description': 'Posición: De pie, piernas abiertas una delante de la otra ligeramente flexionadas, tronco inclinado hacia el frente, con una mano tomando la mancuerna con el brazo extendido y la otra apoyada sobre la rodilla del perfil, espalda recta.',
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
