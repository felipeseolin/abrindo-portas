import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() title: string;
  @Input() type = 'submit';
  @Input() disabled = false;

  constructor() {
  }

  ngOnInit() {
  }

}
