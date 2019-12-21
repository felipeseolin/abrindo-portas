import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public scrool(id) {
    const el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
  }

}
