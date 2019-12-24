import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() id;
  @Input() name;
  @Input() isControl = true;
  @Input() isRequired = true;
  @Input() isDisabled = false;
  @Input() isReadOnly = false;
  @Input() type = 'text';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() color = '';
  @Input() size = '';
  @Input() iconRight = '';
  @Input() iconLeft = '';

  constructor() { }

  ngOnInit() {
  }

}
