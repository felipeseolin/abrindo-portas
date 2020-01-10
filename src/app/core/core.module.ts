import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {InputComponent} from './input/input.component';
import {TextareaComponent} from './textarea/textarea.component';
import {ButtonComponent} from './button/button.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
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
