import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NutricioninfPage } from '../nutricioninf/nutricioninf';

/**
 * Generated class for the NutricionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nutricion',
  templateUrl: 'nutricion.html',
})
export class NutricionPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.items = [
      {
        'title': 'Leche Entera',
        'description': 'Kcal: 6.3 Pro: 3.2 Ft: 3.7 Ch: 4.6'
      },
      {
        'title': 'Yogurt Entero',
        'description': 'Kcal: 61 Pro: 3.3  Ft: 3.5 Ch: 4.0',
      },
      {
        'title': 'Queso Fresco',
        'description': 'Kcal: 307 Pro: 24   Ft: 23  Ch: 1.0'
      },
      {
        'title': 'Queso Mozzarella',
        'description': 'Kcal: 245 Pro: 19.9 Ft: 16.1 Ch: 4.9'
      },
      {
        'title': 'Huevo Entero',
        'description': 'Kcal: 156 Pro: 13 Ft: 11.1 Ch: 0.0'
      },
      {
        'title': 'Clara de Huevo',
        'description': 'Kcal: 53 Pro: 11 Ft: 0.2 Ch: 1.0'
      },
      {
        'title': 'Yema de Huevo',
        'description': 'Kcal: 179 Pro: 11.6 Ft: 13.1 Ch: 3.6'
      },
      {
        'title': 'Carne (Pollo Pechuga)',
        'description': 'Kcal: 108 Pro: 22.4 Ft: 21 Ch: 0.0'
      },
      {
        'title': 'Carne (Lomo Magro)',
        'description': 'Kcal: 148 Pro: 20.7 Ft: 6.5 Ch: -'
      },
      {
        'title': 'Carnes Frías (Chorizo)',
        'description': 'Kcal: 375 Pro: 12.5 Ft: 31.0 Ch: 2.0'
      },
      {
        'title': 'Carnes Frías y Salchichas (Mortadela)',
        'description': 'Kcal: 309 Pro: 17 Ft: 25 Ch: 4.0'
      },
      {
        'title': 'Carne de Pescado(Trucha)',
        'description': 'Kcal: 96 Pro: - Ft: - Ch: -'
      },
      {
        'title': 'Carne de Pescado(Salmón)',
        'description': 'Kcal: 176 Pro: 18.4 Ft: 12 Ch: 0.0'
      },
      {
        'title': 'Pescado Enlatado (Atún en aceite)',
        'description': 'Kcal: 288 Pro: 24.2 Ft: 20.5 Ch: -'
      },
      {
        'title': 'Pescado Enlatado (Atún en agua)',
        'description': 'Kcal: 127 Pro: 28 Ft: 0.8 Ch: -'
      },
      {
        'title': 'Bebida Coca Cola',
        'description': 'Kcal: 48 Pro: 0.0 Ft: 0.0 Ch: 12'
      },
      {
        'title': 'Bebida Coca Cola Light',
        'description': 'Kcal: 0.0 Pro: 0.0 Ft: 0.0 Ch: 0.0'
      },
      {
        'title': 'Bebida Café',
        'description': 'Kcal: 5 Pro: 0.3 Ft: 0.1 Ch: 0.7'
      },
      {
        'title': 'Zumo de Naranja',
        'description': 'Kcal: 50 Pro: 0.6 Ft: 0.1 Ch: 11.5'
      },
      {
        'title': 'Bebida Cerveza',
        'description': 'Kcal: 48 Pro: 0.6 Ft: 0.0 Ch: 3.8'
      },
      {
        'title': 'Bebida Ron',
        'description': 'Kcal: 305 Pro: - Ft: - Ch: -'
      },
      {
        'title': 'Bebida Vino Blanco',
        'description': 'Kcal: 80 Pro: 0.1 Ft: 0.0 Ch: 4'
      },
      {
        'title': 'Bebida Vino Tinto',
        'description': 'Kcal: 65 Pro: 0.23 Ft: 0.0 Ch: 0.1'
      },
      {
        'title': 'Bebida Vodka',
        'description': 'Kcal: 315 Pro: - Ft: - Ch: -'
      },
      {
        'title': 'Bebida Wisky',
        'description': 'Kcal: 264 Pro: - Ft: - Ch: -'
      }
      
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NutricionPage');
  }

  itemSelected(item){
    //this.navCtrl.push(NutricioninfPage, { item:item });
    let alert = this.alertCtrl.create({
      title: item.title,
      subTitle: item.description,
      buttons: ['Entendido']
    });
    alert.present();
  }

}
