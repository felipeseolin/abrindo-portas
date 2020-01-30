import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @Input() images: Array<Object>;
  private currentImage = {};
  private currentIndex = 0;
  private showPresentation = false;

  constructor() { }

  ngOnInit() {
  }

  private seeImage(image, index) {
    this.currentImage = image;
    this.currentIndex = index;
    this.showPresentation = true;
  }
}
