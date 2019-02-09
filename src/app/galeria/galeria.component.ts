import {Component, OnInit} from '@angular/core';
import * as bulmaCarousel from '../../../node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  public carousels;

  constructor() { }

  ngOnInit() {
    this.carousels = bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances
  }

}
