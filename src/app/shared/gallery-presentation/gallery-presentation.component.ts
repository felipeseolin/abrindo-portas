import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild, HostListener} from '@angular/core';
import {GalleryImage} from '../models/gallery-image';

export enum KEY_CODE {
  RIGHT_ARROW = 'ArrowRight',
  LEFT_ARROW = 'ArrowLeft',
  ESC = 'Escape',
}

@Component({
  selector: 'app-gallery-presentation',
  templateUrl: './gallery-presentation.component.html',
  styleUrls: ['./gallery-presentation.component.scss']
})
export class GalleryPresentationComponent implements OnInit {
  @Input() images: Array<GalleryImage>;
  @Input() currentImg: GalleryImage;
  @Input() currentImgIndex: number;
  @Output() showPresentation = new EventEmitter<boolean>();
  @ViewChild('presentation', {static: true}) presentation: ElementRef;
  @ViewChild('iconPrevius', {static: true}) iconPrevius: ElementRef;
  @ViewChild('iconNext', {static: true}) iconNext: ElementRef;

  constructor(
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    this.checkFirstOrLastImage();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event.code);
    switch (event.code) {
      case KEY_CODE.RIGHT_ARROW:
        this.nextImage();
        break;
      case KEY_CODE.LEFT_ARROW:
        this.previusImage();
        break;
      case KEY_CODE.ESC:
        this.closePresentation();
        break;
    }
  }

  public closePresentation() {
    this.showPresentation.emit(false);
  }

  public nextImage() {
    if (this.currentImgIndex + 1 < this.images.length) {
      this.currentImgIndex++;
      this.currentImg = this.images[this.currentImgIndex];
    }
    this.checkFirstOrLastImage();
  }

  public previusImage() {
    if (this.currentImgIndex > 0) {
      this.currentImgIndex--;
      this.currentImg = this.images[this.currentImgIndex];
    }
    this.checkFirstOrLastImage();
  }

  public checkFirstOrLastImage() {
    // Verify if it is the first image, so disable the previus button
    if (this.currentImgIndex <= 0) {
      this.disableButton(this.iconPrevius.nativeElement);
    } else {
      this.enableButton(this.iconPrevius.nativeElement);
    }
    // Verify if it is the last image, so disable the next button
    if (this.currentImgIndex + 1 >= this.images.length) {
      this.disableButton(this.iconNext.nativeElement);
    } else {
      this.enableButton(this.iconNext.nativeElement);
    }
  }

  public disableButton(element: ElementRef) {
    this.renderer.removeClass(element, 'icon-enabled');
  }

  public enableButton(element: ElementRef) {
    this.renderer.addClass(element, 'icon-enabled');
  }
}
