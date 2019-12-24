import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit() {
  }

}
