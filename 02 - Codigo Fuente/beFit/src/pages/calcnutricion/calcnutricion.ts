import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NutricionPage } from '../nutricion/nutricion';

/**
 * Generated class for the CalcnutricionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calcnutricion',
  templateUrl: 'calcnutricion.html',
})
export class CalcnutricionPage {

  testRadioOpen: boolean;
  testRadioResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcnutricionPage');
  }

  kcal() {
    this.navCtrl.push(NutricionPage);
  }

  calcularImc() {
    let prompt = this.alertCtrl.create({
      title: 'Cálcular IMC',
      message: '(Índice de Masa Corporal)',
      inputs: [
        {
          name: 'peso',
          placeholder: 'Peso en Kg.'
        },
        {
          name: 'altura',
          placeholder: 'Altura en cm.'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Calcular',
          handler: data => {

            data.peso = parseFloat(data.peso);
            data.altura = parseFloat(data.altura);
            data.altura *= parseFloat(data.altura);
            data.peso /= data.altura;
            data.peso = Math.round(data.peso);
            let resultado = '';
            if (data.peso < 16) {
              resultado = 'Delgadez Severa';
            }
            else if (data.peso >= 16 && data.peso <= 16.99) {
              resultado = 'Delgadez Moderada';
            }
            else if (data.peso >= 17 && data.peso <= 18.49) {
              resultado = 'Delgadez Aceptable';
            }
            else if (data.peso >= 18.5 && data.peso <= 24.99) {
              resultado = 'Peso Normal';
            }
            else if (data.peso >= 25 && data.peso <= 29.99) {
              resultado = 'Sobrepeso';
            }
            else if (data.peso >= 30 && data.peso <= 34.99) {
              resultado = 'Obseso: Tipo I';
            }
            else if (data.peso >= 35 && data.peso <= 40) {
              resultado = 'Obseso: Tipo II';
            }
            else if (data.peso > 40) {
              resultado = 'Obseso: Tipo III';
            }
            else {
              resultado = 'Otros';
            }

            let alert = this.alertCtrl.create({
              title: 'IMC: ' + data.peso,
              subTitle: 'Estado de Riesgo: ' + resultado,
              buttons: ['Entendido']
            });
            alert.present();
          }
        }
      ]
    });
    prompt.present();
  }

  calcularProteina() {
    let prompt = this.alertCtrl.create({
      title: 'Cálcular Proteina',
      message: '',
      inputs: [
        {
          name: 'peso',
          placeholder: 'Peso en Kg.'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Calcular',
          handler: data => { 
            data.peso = parseFloat(data.peso);
            data.peso *= 1.7;
            data.peso = Math.round(data.peso);

            let alert = this.alertCtrl.create({
              title: data.peso + ' gramos',
              subTitle: 'Díarios de Proteína.',
              buttons: ['Entendido']
            });
            alert.present();
          }
        }
      ]
    });
    prompt.present();
  }

  calcularAgua() {
    let prompt = this.alertCtrl.create({
      title: 'Cálcular Proteina',
      message: '',
      inputs: [
        {
          name: 'peso',
          placeholder: 'Peso en Kg.'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Calcular',
          handler: data => {

            data.peso = parseFloat(data.peso);
            data.peso /= 7;

            data.peso = Math.round(data.peso);

            let alert = this.alertCtrl.create({
              title: data.peso + ' Vasos de Agua de 250 ml',
              subTitle: 'Que necesita consumir cada día.',
              buttons: ['Entendido']
            });
            alert.present();
          }
        }
      ]
    });
    prompt.present();
  }
}
