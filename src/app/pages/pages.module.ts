import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import {CoreModule} from '../core/core.module';
import { OurHistoryComponent } from './our-history/our-history.component';

@NgModule({
  declarations: [
    HomeComponent,
    OurHistoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
  ]
})
export class PagesModule { }
