import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcnutricionPage } from './calcnutricion';

@NgModule({
  declarations: [
    CalcnutricionPage,
  ],
  imports: [
    IonicPageModule.forChild(CalcnutricionPage),
  ],
})
export class CalcnutricionPageModule {}
