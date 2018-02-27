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
        'description': 'Posición: Sentado en el banco con los tríceps en los apoyos, manos supinación tomando la barra al ancho de los hombros, espalda recta.',
      },
      {
        'title': 'Curl de Bíceps Banco Scott con Mancuerna',
        'img': 'biceps01.jpg',
        'description': 'Posición: Sentado tomando la mancuerna con la mano en posición neutra, trícesp apoyado en el muslo, espalda recta levemente inclinada hacia adelante, y la otra manos apoyada en la rodilla.',
      },
      {
        'title': 'Curl de Bíceps de Pie con Barra',
        'img': 'biceps02.jpg',
        'description': 'Posición: De pie, con los pies en la longitud de los hombros, manos en supinación tomando la barra como al ancho de los hombros, espalda recta.',
      },
      {
        'title': 'Curl de Bíceps de Pie con Mancuerna',
        'img': 'biceps03.jpg',
        'description': 'Posición: De pie, con los pies a la longitud de los hombros, manos en supinación tomando la mancuerna, al ancho de los hombros, espalda recta.',
      },
      {
        'title': 'Curl de Bíceps Concentrado con Apoyo en el Muslo',
        'img': 'biceps04.jpg',
        'description': 'Posición: Sentado tomando la mancuerna con la mano en posición neutra, tríceps apoyado en el muslo, espalda recta levemente inclinada hacia adelante y la otra mano apoyada en la rodilla.',
      },
      {
        'title': 'Curl de Bíceps Alterno Tipo Martillo',
        'img': 'biceps05.jpg',
        'description': 'Posición: De pie, con los pies a la longitud del ancho de los hombros, manos en pronación tomando una mancuerna en cada mano y brazos extendidos al ancho de los hombros al f, espalda recta.',
      },
      {
        'title': 'Curl de Bíceps con Polea Alta',
        'img': 'biceps06.jpg',
        'description': 'Posición: De pie, situado en la mitad de la máquina de poleas, con los grips, tomados en pronación con los pies a la logintud del ancho de los hombros, espalda recta.',
      },
      {
        'title': 'Curl de Bíceps de Pie con Polea',
        'img': 'biceps07.jpg',
        'description': 'Posición: De pie, con los pies a la longitud a la longitud de los hombros, manos tomando el grip en supinación, espalda recta.',
      },
      {
        'title': 'Curl de Bíceps con Mancuerna en Banco Inclinado',
        'img': 'biceps08.jpg',
        'description': 'Posición: Recostado en un banco inclinad, manos en supinación tomando una mancuerna en cada mano, brazos extendidos, espalda recta totalmente apoyada.',
      },
      {
        'title': 'Curl de Bíceps Manos en Pronación',
        'img': 'biceps09.jpg',
        'description': 'Posición: De pie, con los pies a la longitud del ancho de los hombros, manos en pronación al ancho de los hombros tomando la barra, brazos extendidos sosteniendo la barra sobre los muslos, espalda recta.',
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
