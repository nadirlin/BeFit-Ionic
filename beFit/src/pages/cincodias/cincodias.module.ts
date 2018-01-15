import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CincodiasPage } from './cincodias';

@NgModule({
  declarations: [
    CincodiasPage,
  ],
  imports: [
    IonicPageModule.forChild(CincodiasPage),
  ],
})
export class CincodiasPageModule {}
