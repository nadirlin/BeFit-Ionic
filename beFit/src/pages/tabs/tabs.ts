import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AvancePage } from '../avance/avance';
import { GuiaPage } from '../guia/guia';
import { RutinaPage } from '../rutina/rutina';
import { NutricionPage } from '../nutricion/nutricion';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = AvancePage;
  tab5Root = GuiaPage;
  tab6Root = RutinaPage;
  tab7Root = NutricionPage;

  constructor() {

  }
}
