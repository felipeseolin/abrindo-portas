import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  nameInputValidation = function (value: string): string {
    if (value && (value.trim().length === 0 || value.length < 5)) {
      return 'O nome deve ser completo';
    }
    const regex = /^[a-zA-Z ]{2,30}$/;
    if (!regex.test(value)) {
      return 'O nome digitado não é válido';
    }
    return null;
  };

  emailInputValidation = function (value: string): string {
    if (value.trim().length === 0) {
      return 'É obrigatório inserir um endereço de e-mail';
    }
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!regex.test(value)) {
      return 'Digite um endereço de e-mail válido';
    }
    return null;
  };

  subjectInputValidation = function (value: string): string {
    if (value && value.trim().length === 0) {
      return 'É obrigatório inserir um assunto';
    }
    if (value && value.length < 5) {
      return 'O assunto deve conter ao menos 5 caracteres';
    }
    if (value && value.length > 50) {
      return 'O assunto deve possuir menos de 50 caracteres';
    }
    return null;
  };

  messageInputValidation = function (value: string): string {
    if (value && value.trim().length === 0) {
      return 'É obrigatório inserir uma mensagem';
    }
    if (value && value.length > 1000) {
      return 'A mensagem deve conter menos de 1000 caracteres';
    }
    return null;
  };

  constructor() { }

  ngOnInit() {
  }

}
