import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPresentationComponent } from './gallery-presentation.component';

describe('GalleryPresentationComponent', () => {
  let component: GalleryPresentationComponent;
  let fixture: ComponentFixture<GalleryPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
