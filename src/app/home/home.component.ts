import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fieldNameInvalid = null;
  fieldEmailInvalid = null;
  fieldSubjectInvalid = null;
  fieldMessageInvalid = null;

  constructor() {
  }

  ngOnInit() {
  }

  fieldTouched(fieldName) {
    switch (fieldName) {
      case 'name':
        this.fieldNameInvalid = true;
        break;
      case 'email':
        this.fieldEmailInvalid = true;
        break;
      case 'subject':
        this.fieldSubjectInvalid = true;
        break;
      case 'message':
        this.fieldMessageInvalid = true;
        break;
    }
  }

}
