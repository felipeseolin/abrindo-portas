import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../models/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  @Input() member: Member;
  public photo: string;

  constructor() { }

  ngOnInit() {
    this.photo = this.member.mainPhoto;
  }

  public changePhoto() {
    this.photo = this.member.mainPhoto === this.photo ? this.member.hoverPhoto : this.member.mainPhoto;
  }

}
