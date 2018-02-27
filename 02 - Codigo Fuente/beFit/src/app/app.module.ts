import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AvancePage } from '../pages/avance/avance';
import { GuiaPage } from '../pages/guia/guia';
import { RutinaPage } from '../pages/rutina/rutina';
import { NutricionPage } from '../pages/nutricion/nutricion';
import { PectoralPage } from '../pages/pectoral/pectoral';
import { PlantillaejPage } from '../pages/plantillaej/plantillaej';
import { EspaldaPage } from '../pages/espalda/espalda';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AvancesService } from '../services/avances.service';
import { AvanceinfPage } from '../pages/avanceinf/avanceinf';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BicepsPage } from '../pages/biceps/biceps';
import { TricepsPage } from '../pages/triceps/triceps';
import { HombroPage } from '../pages/hombro/hombro';
import { PiernaPage } from '../pages/pierna/pierna';
import { AbdomenPage } from '../pages/abdomen/abdomen';
import { TresdiasPage } from '../pages/tresdias/tresdias';
import { CuatrodiasPage } from '../pages/cuatrodias/cuatrodias';
import { CincodiasPage } from '../pages/cincodias/cincodias';
import { NutricioninfPage } from '../pages/nutricioninf/nutricioninf';
import { CalcnutricionPage } from '../pages/calcnutricion/calcnutricion';
import { Push } from '@ionic-native/push';


export const firebaseConfig = {
  apiKey: "AIzaSyDSkJ90L56ESNylgT2AULnJ6_sNY-htT7M",
  authDomain: "befit-6b78f.firebaseapp.com",
  databaseURL: "https://befit-6b78f.firebaseio.com",
  storageBucket: "befit-6b78f.appspot.com",
  messagingSenderId: '203143300345'
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AvancePage,
    GuiaPage,
    RutinaPage,
    NutricionPage,
    PectoralPage,
    PlantillaejPage,
    EspaldaPage,
    AvanceinfPage,
    BicepsPage,
    TricepsPage,
    HombroPage,
    PiernaPage,
    AbdomenPage,
    TresdiasPage,
    CuatrodiasPage,
    CincodiasPage,
    NutricioninfPage,
    CalcnutricionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AvancePage,
    GuiaPage,
    RutinaPage,
    NutricionPage,
    PectoralPage,
    PlantillaejPage,
    EspaldaPage,
    AvanceinfPage,
    BicepsPage,
    TricepsPage,
    HombroPage,
    PiernaPage,
    AbdomenPage,
    TresdiasPage,
    CuatrodiasPage,
    CincodiasPage,
    NutricioninfPage,
    CalcnutricionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AvancesService
  ]
})
export class AppModule {}
