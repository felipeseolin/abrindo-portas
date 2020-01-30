import {Component, Input, OnInit} from '@angular/core';
import {GalleryImage} from '../models/gallery-image';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @Input() images: Array<GalleryImage>;
  private currentImage: GalleryImage;
  private currentIndex = 0;
  public showPresentation = false;

  constructor() { }

  ngOnInit() {
  }

  private seeImage(image, index) {
    this.currentImage = image;
    this.currentIndex = index;
    this.showPresentation = true;
  }
}
