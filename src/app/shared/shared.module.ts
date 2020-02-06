import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CounterComponent } from './counter/counter.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import {HttpClientModule} from '@angular/common/http';
import { MemberComponent } from './member/member.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { GalleryPresentationComponent } from './gallery-presentation/gallery-presentation.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    CounterComponent,
    SocialMediaComponent,
    MemberComponent,
    ImageGalleryComponent,
    GalleryPresentationComponent,
    AccordionComponent
  ],
    exports: [
        CounterComponent,
        SocialMediaComponent,
        MemberComponent,
        ImageGalleryComponent,
        AccordionComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule
  ]
})
export class SharedModule { }
