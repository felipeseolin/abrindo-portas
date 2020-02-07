import {Component, Input, OnInit} from '@angular/core';
import {TabGroupComponent} from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() isActive = false;
  @Input() icon: string;
  @Input() label: string;

  constructor(tabs: TabGroupComponent) {
    tabs.addTab(this);
  }

  ngOnInit() {
  }

}
