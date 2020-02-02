import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { OurHistoryComponent } from './our-history/our-history.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    OurHistoryComponent,
    NotFoundComponent,
    ContactComponent,
    AboutComponent,
    MembersComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
