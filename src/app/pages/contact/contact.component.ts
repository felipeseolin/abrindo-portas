import {Component, OnInit} from '@angular/core';
import {ContactMessage} from '../../shared/models/contact-message';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {emptyValidator} from '../../validators/empty.validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public formMessage: FormGroup = this.createForm(new ContactMessage());
  public formMessageSubmitted = false;
  public sendingMessage = false;
  public showMessageFormNotification = '';
  private formMessageAction = 'https://formspree.io/xnqpgvrb';

  submitFormMessage = () => {
    this.formMessageSubmitted = true;
    if (!this.formMessage.valid) {
      return;
    }
    this.sendingMessage = true;
    this.http.post(this.formMessageAction, this.formMessage.value).subscribe(
      (reponse) => {
        this.formMessageSubmitted = false;
        this.sendingMessage = false;
        this.showMessageFormNotification = 'success';
        this.scrollTo('contact');
        this.formMessage.reset();
      },
      (error) => {
        this.showMessageFormNotification = 'danger';
        this.sendingMessage = false;
        this.scrollTo('contact');
      }
    );
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
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

  closeNotification() {
    this.showMessageFormNotification = '';
  }

  scrollTo(id: string) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

}
