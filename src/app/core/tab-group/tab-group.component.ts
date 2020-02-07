import {Component, OnInit} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {

  tabs: TabComponent[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.isActive = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tabComponent) => {
      tabComponent.isActive = false;
    });
    tab.isActive = true;
  }

}
