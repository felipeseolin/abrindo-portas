import {Component, OnInit} from '@angular/core';
import {ContactMessage} from '../../shared/models/contact-message';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {emptyValidator} from '../../validators/empty.validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public formMessage: FormGroup = this.createForm(new ContactMessage());
  public formMessageSubmitted = false;

  submitFormMessage = () => {
    this.formMessageSubmitted = true;
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm(new ContactMessage());
  }

  createForm(contactMessage: ContactMessage): FormGroup {
    return this.formBuilder.group({
      name: [
        contactMessage.name,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z ]{2,30}$/),
          emptyValidator(),
        ]
      ],
      email: [
        contactMessage.email,
        [
          Validators.required,
          Validators.email,
          emptyValidator(),
        ]
      ],
      phone: [
        contactMessage.phone,
        [
          emptyValidator(),
        ]
      ],
      subject: [
        contactMessage.subject,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
          emptyValidator(),
        ]
      ],
      message: [
        contactMessage.message,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500),
          emptyValidator(),
        ]
      ],
    });
  }

  get formMessageControl() {
    return this.formMessage.controls;
  }

}
