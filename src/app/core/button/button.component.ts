import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title: string;
  @Input() type = 'submit';
  @Input() icon = '';
  @Input() classes = '';
  @Input() disabled = false;

  constructor() {
  }

  ngOnInit() {
  }

}
