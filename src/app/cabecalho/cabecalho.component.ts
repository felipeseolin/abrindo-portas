import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  public hideMenu = true;

  constructor() { }

  ngOnInit() {
  }

  public showMenu() {
    this.hideMenu = !this.hideMenu;
  }

  public scrool(id) {
   const el = document.getElementById(id);
   el.scrollIntoView({behavior: 'smooth'});
  }
}
