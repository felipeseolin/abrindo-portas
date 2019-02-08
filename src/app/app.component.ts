import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'abrindo-portas';
  lat = -23.186072;
  lng = -50.657329;

  ngOnInit(): void {
    let carousels = bulmaCarousel.attach();
  }
}

