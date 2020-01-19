import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  @Input() name: string;
  @Input() sectors: Array<string>;
  @Input() mainPhoto: string;
  @Input() hoverPhoto: string;
  @Input() isInactive = false;
  private photo: string;

  constructor() { }

  ngOnInit() {
    this.photo = this.mainPhoto;
  }

  private changePhoto() {
    this.photo = this.mainPhoto === this.photo ? this.hoverPhoto : this.mainPhoto;
  }

}
