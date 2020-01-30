import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private images = [
    {src: '/assets/gallery/1.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/2.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/3.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/4.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/5.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/6.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/7.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/8.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/9.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/10.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/11.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/12.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/13.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/14.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/15.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/16.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/17.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/18.jpg', alt: 'Imagem'},
    {src: '/assets/gallery/19.jpg', alt: 'Imagem'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
