import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {RodapeComponent} from './rodape/rodape.component';
import {CommonModule} from '@angular/common';

import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDR3imI68l5LF6nxdN3rkfGJPfayN1zT8s'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
