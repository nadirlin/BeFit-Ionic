import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlantillaejPage } from '../plantillaej/plantillaej';

/**
 * Generated class for the AbdomenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abdomen',
  templateUrl: 'abdomen.html',
})
export class AbdomenPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': 'Elevación de Rodillas Colgando',
        'img': 'abdomen00.jpg',
        'description': 'Posición: En una barra fija colocar las manos en pronación a una distancia de aproximadamente a la anchura de los hombros con los brazos y piernas totalmente extendidos.',
      },
      {
        'title': 'Flexiones Laterales con Peso',
        'img': 'abdomen01.jpg',
        'description': 'Posición: De pie con las piernas separadas al ancho de los hombres, sosteniendo una mancuerna en cada mano, espalda recta.',
      },
      {
        'title': 'Cruch en Polea',
        'img': 'abdomen02.jpg',
        'description': 'Posición: Arrodillado de espalda en la polea (en posición alta) sosteniendo con ambas manos la soga. ',
      },
      {
        'title': 'Curl Abdominal',
        'img': 'abdomen03.jpg',
        'description': 'Posición: Acostado sobre una banca, ambas manos detras de la cabeza.',
      },
      {
        'title': 'Curl Abdominal Declinado',
        'img': 'abdomen04.jpg',
        'description': 'Posición: Acostado sobre una banca declinada, manos entre cruzada sobre el pecho, piernas en los apoyos.',
      },
      {
        'title': 'Flexión de Pierna en Banca',
        'img': 'abdomen05.jpeg',
        'description': 'Posición: Sentado en una banca, ambas manos apoyadas sobre la banca detrás del cuerpo, piernas extendidas.',
      },
      {
        'title': 'Elevación de Rodillas Paralela',
        'img': 'abdomen06.jpg',
        'description': 'Posición: En suspención, espalda y brazos sobre los apoyos, piernas extendidas.',
      },
      {
        'title': 'Rotación del Fronco con Bastón',
        'img': 'abdomen07.jpg',
        'description': 'Posición: De pie, piernas al ancho de los hombros, bastón detras de la cabeza apoyado en los deltoides posteriores, brazos extendidos tomando el bastón.',
      },
      {
        'title': 'Twist con Peso',
        'img': 'abdomen08.jpg',
        'description': 'Posición: Sentado sobre una banca declinado, pies sobre los apoyos, tomando con ambas manos el disco, mancuercuena o pelota medicinal.',
      },
      {
        'title': 'Elevación de Tronco en Suspención',
        'img': 'abdomen09.jpg',
        'description': 'Posición: Suspendido con pies en los apoyos, cuerpo extendido manos entre cruzadas sobre el pecho.',
      },
      {
        'title': 'Flexión Lateral del Tronco en Banco',
        'img': 'abdomen10.jpg',
        'description': 'Posición: Acostado boca arriba sobre un banco plano, con los pies en el suelo. Ejecución: Sostener la barra a un ancho mayor a la longitud de los hombros, luego realizar un movimiento descendete hasta el pecho seguido de un movimiento ascendente. Respiración: Inspirar al momento de hacer el movimiento descendente y exhalar al realizar el movimiento ascendente. Músculos Implicados: Pectoral, hombro, tríceps.',
      },
      {
        'title': 'Elevación de Pierna en Banco Inclinado',
        'img': 'abdomen11.jpg',
        'description': 'Posición: Acostado sobre un banco inclinado, con las manos sujetas del banco por encima de la cabeza, piernas extendidas, espalda recta. ',
      },
      {
        'title': 'Encogimientos Abdominales en Máquina',
        'img': 'abdomen12.jpg',
        'description': 'Posición: Sentado sobre la máquina con pies y manos en los apoyos.',
      },
      {
        'title': 'Encogimientos de Oblicuos en el Suelo',
        'img': 'abdomen13.jpg',
        'description': 'Posición: Acostado sobre una colchoneta de medio lado con las piernas recogidas espalda recta.',
      },
      {
        'title': 'Bicicleta en el Aire',
        'img': 'abdomen14.png',
        'description': 'Posición: Acostado en el suelo, manos detras de la cabeza, y piernas recogidas en un angulo de 90 grados.',
      },
      {
        'title': 'Toque de Talón',
        'img': 'abdomen15.jpg',
        'description': 'Posición: Acostado en el suelo, brazos estirados al lado del cuerpo, piernas recogidas, espalda recta.',
      },
      {
        'title': 'Plancha',
        'img': 'abdomen16.jpg',
        'description': 'Posición: Boca abajo en el suelo apoyando sobre la punta de los pies y los antebrazos, espalda recta, piernas totalmente extendidas.',
      },
      {
        'title': 'Plancha Lateral',
        'img': 'abdomen17.png',
        'description': 'Posición: Apoyado sobre el antebrazo derecho o izquierdo y el pie del mismo perfil, espalda recta, piernas totalmente estiradas y abdomen contraido.',
      },
      {
        'title': 'Abdominales con Rueda',
        'img': 'abdomen18.png',
        'description': 'Posición: De rodillas con cada mano en los apoyos de la rueda.',
      }
      
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbdomenPage');
  }

  itemSelected(item){
    this.navCtrl.push(PlantillaejPage, { item:item });
  }

}
