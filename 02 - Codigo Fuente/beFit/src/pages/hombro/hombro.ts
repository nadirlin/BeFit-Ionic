import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantillaejPage } from '../plantillaej/plantillaej';

/**
 * Generated class for the HombroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hombro',
  templateUrl: 'hombro.html',
})
export class HombroPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {
        'title': 'Press Trasnuca con Barra',
        'img': 'hombro00.jpg',
        'description': 'Posición: Sentado con la espalda recta, barra tomada en pronación a una distancia mayor al ancho de los hombros.',
      },
      {
        'title': 'Press Frontal con Barra',
        'img': 'hombro01.jpg',
        'description': 'Posición: Sentado con la espalda recta, barra tomada en pronación a una distancia mayor al ancho de los hombros, apoyada en la parte alta del pecho.',
      },
      {
        'title': 'Press Sentado con Mancuerna',
        'img': 'hombro02.jpg',
        'description': 'Posición: Sentado con la espalda recta, mancuernas a la altura de los hombros en pronación.',
      },
      {
        'title': 'Press Frontal con Rotación de la Muñeca',
        'img': 'hombro03.jpg',
        'description': 'Posición: Sentado con la espalda recta, mancuernas mantenida al frente a la altura de los hombros en supinación.',
      },
      {
        'title': 'Elevaciones Laterales con Mancuerna',
        'img': 'hombro04.png',
        'description': 'Posición: De pie con las piernas ligeramente separadas, espalda recta, brazos paralelos al cuerpo con una mancuerna en cada mano.',
      },
      {
        'title': 'Elevaciones Laterales Tronco Inclinado Hacia Adelante',
        'img': 'hombro05.jpg',
        'description': 'Posición: De pie con las piernas ligeramente separadas, tronco inclinado hacia adelante, espalda recta, brazos colgando con los codos ligeramente flexionados con una mancuerna en cada mano.',
      },
      {
        'title': 'Elevaciones Frontales Alternas con Mancuerna',
        'img': 'hombro06.jpg',
        'description': 'Posición: De pie con las piernas ligeramente sepadas, espalda recta, con una mancuerna en cada mano tomada en pronación apoyada sobre los muslos.',
      },
      {
        'title': 'Elevaciones Frontales en Polea',
        'img': 'hombro07.jpg',
        'description': 'Posición:  De pie con las piernas ligeramente sepadas, espalda recta.',
      },
      {
        'title': 'Elevaciones Frontales con Barra',
        'img': 'hombro08.jpg',
        'description': 'Posición:  De pie con las piernas ligeramente sepadas, espalda recta, brazos al frente con la barra tomada en pronación apoyada en los muslos.',
      },
      {
        'title': 'Remo al Cuello Manos Separadas',
        'img': 'hombro09.jpg',
        'description': 'Posición:  De pie con las piernas ligeramente sepadas, espalda recta, brazos al frente con la barra tomada en pronación a un ancho mayor al de los hombros apoyada en los muslos.',
      },
      {
        'title': 'Deltoides Posterior en Máquina',
        'img': 'hombro10.jpg',
        'description': 'Posición: Sentado de frente a la máquina con el pecho apoyado en el soporte, brazos estirados hacia adelante tomando los grips de la máquina.',
      },
      {
        'title': 'Elevaciones Laterales Acostado de Lado',
        'img': 'hombro11.jpg',
        'description': 'Posición: Acostado de lado sobre un banco con una mancuerna tomada en pronación.',
      }
      
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HombroPage');
  }

  itemSelected(item){
    this.navCtrl.push(PlantillaejPage, { item:item });
  }

}
