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
    this.animateValue('students', 25, 100, 5000);
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
