import { Component, OnInit } from '@angular/core';
import {GalleryImage} from '../../shared/models/gallery-image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images = [
    new GalleryImage('/assets/gallery/1.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/2.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/3.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/4.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/5.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/6.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/7.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/8.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/9.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/10.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/12.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/13.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/14.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/15.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/16.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/17.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/18.jpg', 'Imagem'),
    new GalleryImage('/assets/gallery/19.jpg', 'Imagem'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
