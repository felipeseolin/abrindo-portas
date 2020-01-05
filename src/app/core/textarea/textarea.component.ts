import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  @Input() id;
  @Input() name;
  @Input() validation: Function;
  @Input() value = '';
  @Input() isControl = true;
  @Input() isRequired = true;
  @Input() isDisabled = false;
  @Input() isReadOnly = false;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() color = '';
  @Input() size = '';
  @Input() iconRight = '';
  @Input() iconLeft = '';
  private errorMessage: string;
  private isInvalid = false;
  private isFilled = false;

  constructor() {
  }

  ngOnInit() {
  }

  inputFocusOut() {
    this.validateInput();
  }

  validateInput() {
    this.isFilled = !!this.value.length;
    this.errorMessage = this.validation(this.value);
    this.isInvalid = !!(this.isFilled && this.errorMessage);
  }

}
