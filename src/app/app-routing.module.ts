import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GaleriaComponent} from './galeria/galeria.component';
import {ContatoComponent} from './contato/contato.component';

const routes: Routes = [
  { path: 'galeria', component: GaleriaComponent},
  // { path: 'nos'},
  { path: 'contato', component: ContatoComponent},
  // { path: 'inscricoes'},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
