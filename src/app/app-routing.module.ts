import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GaleriaComponent} from './galeria/galeria.component';

const routes: Routes = [
  { path: 'galeria', component: GaleriaComponent},
  // { path: 'nos'},
  // { path: 'contato'},
  // { path: 'inscricoes'},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
