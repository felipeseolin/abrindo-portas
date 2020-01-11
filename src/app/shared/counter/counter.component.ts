import {Component, Input, OnInit, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, AfterContentInit {

  // The count begins at
  @Input() start: number;
  // The count needs to reach
  @Input() number: number;
  // Speed in ms
  @Input() speed = 80;
  private counterAnimation: any = null;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.count();
  }

  count() {
    this.counterAnimation = setInterval(() => {
      if (this.start === (this.number) - 1) {
        clearInterval(this.counterAnimation);
      }
      this.start++;
    }, this.speed);
  }

}
