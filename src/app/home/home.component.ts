import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public fieldNameInvalid = null;
  public fieldEmailInvalid = null;
  public fieldSubjectInvalid = null;
  public fieldMessageInvalid = null;

  private FIELD_NAME = 'name';
  private FIELD_EMAIL = 'email';
  private FIELD_SUBJECT = 'subject';
  private FIELD_MESSAGE = 'message';

  constructor() {
  }

  ngOnInit() {
    this.animateValue('students', 25, 100, 5000);
  }

  public fieldTouched(fieldName: string) {
    switch (fieldName) {
      case this.FIELD_NAME:
        // this.fieldNameInvalid = true;
        this.verifyField(this.FIELD_NAME);
        break;
      case this.FIELD_EMAIL:
        this.fieldEmailInvalid = true;
        break;
      case this.FIELD_SUBJECT:
        this.fieldSubjectInvalid = true;
        break;
      case this.FIELD_MESSAGE:
        this.fieldMessageInvalid = true;
        break;
    }
  }

  private verifyField(fieldName: string) {
    switch (fieldName) {
      case this.FIELD_NAME:
        // if () {
        //
        // }
        break;
      case this.FIELD_EMAIL:
        this.fieldEmailInvalid = true;
        break;
      case this.FIELD_SUBJECT:
        this.fieldSubjectInvalid = true;
        break;
      case this.FIELD_MESSAGE:
        this.fieldMessageInvalid = true;
        break;
    }
  }

  private animateValue(id: string, start, end: number, duration: number) {
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const obj = document.getElementById(id);
    const timer = setInterval(function () {
      current += increment;
      obj.innerHTML = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

}
