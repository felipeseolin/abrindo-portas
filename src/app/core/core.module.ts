import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    InputComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
