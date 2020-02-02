import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() form: FormGroup;
  @Input() value: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() size: string;
  @Input() icon: string;
  @Input() type = 'text';
  @Input() formSubmitted = false;
  @Input() isControl = true;
  @Input() isRequired = true;
  @Input() isDisabled = false;
  @Input() isReadOnly = false;

  constructor() { }

  ngOnInit() {
  }

  formControl(name) {
    return this.form.get(name);
  }

}
