import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
  ]
})
export class CoreModule { }
