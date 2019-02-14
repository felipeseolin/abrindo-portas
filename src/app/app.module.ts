import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {RodapeComponent} from './rodape/rodape.component';
import {CommonModule} from '@angular/common';

import {AgmCoreModule} from '@agm/core';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    ContatoComponent,
    SobreNosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: '',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
