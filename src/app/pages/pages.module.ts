import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
  ]
})
export class PagesModule { }
