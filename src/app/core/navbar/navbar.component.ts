import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
