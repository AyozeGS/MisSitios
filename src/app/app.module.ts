import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImgService } from './services/img.service';
import { DbService } from './services/db.service';
import { IonicStorageModule } from '@ionic/storage';

import { ModalNuevoSitioPageModule } from './modal-nuevo-sitio/modal-nuevo-sitio.module';
import { ModalDetalleSitioPageModule } from './modal-detalle-sitio/modal-detalle-sitio.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyBQgQ3mTSd2tWEU0FMWrr5Ow3BpQX0ZuCs',
  authDomain: 'mis-sitios-13c81.firebaseapp.com',
  databaseURL: 'https://mis-sitios-13c81.firebaseio.com',
  projectId: 'mis-sitios-13c81',
  storageBucket: 'mis-sitios-13c81.appspot.com',
  messagingSenderId: '498043583917'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ModalNuevoSitioPageModule,
    ModalDetalleSitioPageModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    ImgService,
    DbService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
