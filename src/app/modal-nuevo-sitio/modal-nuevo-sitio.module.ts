import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNuevoSitioPageRoutingModule } from './modal-nuevo-sitio-routing.module';

import { ModalNuevoSitioPage } from './modal-nuevo-sitio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNuevoSitioPageRoutingModule
  ],
  declarations: [ModalNuevoSitioPage]
})
export class ModalNuevoSitioPageModule {}
