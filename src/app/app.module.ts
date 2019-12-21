import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {FooterComponent} from './footer/footer.component';
import {CommonModule} from '@angular/common';

import {AgmCoreModule} from '@agm/core';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    HomeComponent,
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
