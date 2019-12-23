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

}
