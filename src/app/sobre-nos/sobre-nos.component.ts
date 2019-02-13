import {Component, OnInit} from '@angular/core';
import * as bulmaCarousel from '../../../node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
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
