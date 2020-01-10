import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  @Input() size = 32;
  @Input() color = '#1A1A41';

  constructor() { }

  ngOnInit() {
  }

}
