import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantillaejPage } from '../plantillaej/plantillaej';

/**
 * Generated class for the EspaldaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-espalda',
  templateUrl: 'espalda.html',
})
export class EspaldaPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': 'Polea al Pecho',
        'img': 'espalda00.jpg',
        'description': 'Posición: Sentado sobre la máquina con las piernas apoyadas en los soportes, tomarlos grips de la barra con las manos separadas, espada recta.',
      },
      {
        'title': 'Polea Trasnuca',
        'img': 'espalda01.jpg',
        'description': 'Posición: Sentado sobre la máquina con las piernas apoyadas en los soportes, tomar los grips de la barra con las manos separadas, espalda recta.',
      },
      {
        'title': 'Polea al Pecho con Agarre Estrecho',
        'img': 'espalda02.jpg',
        'description': 'Posición: Sentado sobre la máquina con las piernas apoyadas en los soportes, tomar los grips con las manos, espalda recta.',
      },
      {
        'title': 'Remo Horizontal a una Mano con Mancuerna',
        'img': 'espalda03.jpg',
        'description': 'Posición: Rodilla y manos apoyadas sobre un banco plano, con la otra mano sujetar la mancuerna con la espalda recta y brazo extendido.',
      },
      {
        'title': 'Remo en Polea Baja Agarre Estrecho',
        'img': 'espalda04.jpg',
        'description': 'Posición: Sentado sobre la máquina, piernas en posición horizontal, levemente flexionadas, brazos extendidos, hacia el frente, tomando los crips.',
      },
      {
        'title': 'Remo en Máquina',
        'img': 'espalda05.jpg',
        'description': 'Posición: Sentado sobre la máquina, pecho apoyado sobre el soporte, pies en el suelo, brazos extendidos tomando los grips.',
      },
      {
        'title': 'Remo Horizontal con Barra en Pronación',
        'img': 'espalda06.jpg',
        'description': 'Posición: De pie, rodillas ligeramente flexionadas, tronco inclinado, espalda recta, manos a la altura de los hombros.',
      },
      {
        'title': 'Remo en Barra T con Apoyo al Pecho',
        'img': 'espalda07.jpg',
        'description': 'Posición: Recosta sobre la máquina, sujetar la barra, manos en pronación, espalda recta.',
      },
      {
        'title': 'Remo al Cuello con Manos Juntas',
        'img': 'espalda08.jpg',
        'description': 'Posición: De pie, con la espalda recta, sujetando la barra a un ancho aproximandamente unos 15 cm, con las manos en pronación, piernas separadas al ancho de los hombros.',
      },
      {
        'title': 'Dominadas con Barra Fija',
        'img': 'espalda09.jpg',
        'description': 'Posición: En suspención sujetando la barra con las manos en la barra y extendidas superando la logitud de los hombros, piernas levemente flexionadas.',
      },
      {
        'title': 'Dominadas con Barra Fija Agarre Estrecho',
        'img': 'espalda10.jpg',
        'description': 'Posición: Es suspención sujentando la barra con las manos en supinación, separadas aproximadamente de 10 cm, piernas levemente flexionadas.',
      },
      {
        'title': 'Pull Over con Polea Alta Brazos Extendidos',
        'img': 'espalda11.jpg',
        'description': 'Posición: De pie, espalda recta, sujetando la barra a un ancho de la altura de los hombros, con las manos en pronación, piernas separadas al ancho de los hombros.',
      },
      {
        'title': 'Peso Muerto',
        'img': 'espalda12.jpg',
        'description': 'Posición: Agachado, tronco inclinado hacia adelante, espalda recta, piernas al ancho de los hombros, manos en pronación, brazos extendidos sujetando la barra al ancho de los hombros.',
      }

      
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EspaldaPage');
  }

  itemSelected(item){
    this.navCtrl.push(PlantillaejPage, { item:item });
  }

}
