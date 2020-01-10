import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CounterComponent } from './counter/counter.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    CounterComponent,
    SocialMediaComponent
  ],
  exports: [
    CounterComponent,
    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule
  ]
})
export class SharedModule { }
