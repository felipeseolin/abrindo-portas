import {Component, OnInit} from '@angular/core';
import * as bulmaCarousel from '../../../node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css'],
  // Animação utilizada para fazer o efeito de fade in e out
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class SobreNosComponent implements OnInit {

  public carousels;
  public showText = true;

  constructor() {
  }

  ngOnInit() {
    this.carousels = bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances
  }

  hideText() {
    this.showText = false;
  }
}
