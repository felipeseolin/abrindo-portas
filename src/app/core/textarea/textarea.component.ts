import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() form: FormGroup;
  @Input() value: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() size: string;
  @Input() formSubmitted = false;
  @Input() isControl = true;
  @Input() isRequired = true;
  @Input() isDisabled = false;
  @Input() isReadOnly = false;

  constructor() {
  }

  ngOnInit() {
  }

  formControl(name) {
    return this.form.get(name);
  }

}
