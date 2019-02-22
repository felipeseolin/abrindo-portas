import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SobreNosComponent} from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  { path: 'nos', component: SobreNosComponent},
  // { path: 'inscricoes'},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
