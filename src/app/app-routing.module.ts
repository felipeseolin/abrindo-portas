import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {OurHistoryComponent} from './pages/our-history/our-history.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';
import {MembersComponent} from './pages/members/members.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {ClassesComponent} from './pages/classes/classes.component';

const routes: Routes = [
  { path: 'history', component: OurHistoryComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'members', component: MembersComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'classes', component: ClassesComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
