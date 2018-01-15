import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvancePage } from './avance';

@NgModule({
  declarations: [
    AvancePage,
  ],
  imports: [
    IonicPageModule.forChild(AvancePage),
  ],
})
export class AvancePageModule {}
